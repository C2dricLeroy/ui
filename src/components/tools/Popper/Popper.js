import {useState, useRef} from 'react';
import {customClassSwitcher} from '~/core';

import {useFloating, useInteractions, useHover, FloatingArrow, arrow, offset, flip, autoUpdate, autoPlacement, useRole, useDismiss} from '@floating-ui/react';

// TODO : Use Floating Portal?
// TODO : Collisions dont seem to be working as expected, need to investigate

const ARROW_HEIGHT = 7;
const GAP = 2;

/**
 *
 *
 * For Placement https://floating-ui.com/docs/computePosition#placement


 */

const Popper = ({
    popperName='',
    customRootClass='',
    activationStrategy='hover',
    className='',
    placement='top',
    children,
    open=false,
    hoverDelay=10,
    showArrow=true,
    pop=<></>,
    ...props}) => {
    //
    const rootClass = customClassSwitcher(customRootClass, popperName);
    const arrowRef = useRef(null);
    const [isOpen, setIsOpen] = useState(open);

    const {refs, floatingStyles, context} = useFloating({
        placement: placement,
        whileElementsMounted: autoUpdate,
        open: isOpen,
        // strategy: 'fixed',
        middleware: [
            arrow({
                element: arrowRef,
            }),
            offset(ARROW_HEIGHT + GAP),
            flip({
                mainAxis: false,
                fallbackPlacements: ['right', 'bottom'],
            },
            ),
        ],
        onOpenChange: setIsOpen,
    });

    const role = useRole(context);
    const dismiss = useDismiss(context);

    const hover = useHover(context, {
    // delay: hoverDelay,
    });

    const {getReferenceProps, getFloatingProps} = useInteractions([
        hover,
        role,
        dismiss,
    ]);

    return <>
        <span
            className={`${rootClass}-reference-element ${className}`} ref={refs.setReference} {...getReferenceProps(
                {
                    onClick: () => {
                        console.log('click');
                    },
                },
            )}>{children}</span>
        {isOpen && <div className={`${rootClass}-floating-element`} ref={refs.setFloating} style={floatingStyles} {...getFloatingProps()} >
            {showArrow && <FloatingArrow className={`rad-ui-arrow ${rootClass}-arrow`} ref={arrowRef} context={context} />}
            {pop}</div>}
    </>;
};

export default Popper;