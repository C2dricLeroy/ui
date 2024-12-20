import React, { PropsWithChildren } from 'react';

import ProgressRoot from './fragments/ProgressRoot';
import ProgressIndicator from './fragments/ProgressIndicator';

export const COMPONENT_NAME = 'Progress';

export interface ProgressProps extends PropsWithChildren {
    value: number;
    minValue?: number,
    maxValue?: number;
    customRootClass?: string
    renderLabel?(value: number): JSX.Element
  }

function Progress({ customRootClass, ...indicatorProps }: ProgressProps) {
    return (
        <ProgressRoot customRootClass={customRootClass}>
            <ProgressIndicator customRootClass={customRootClass} {...indicatorProps}/>
        </ProgressRoot>
    );
}

Progress.displayName = COMPONENT_NAME;
Progress.Root = ProgressRoot;
Progress.Indicator = ProgressIndicator;

export default Progress;
