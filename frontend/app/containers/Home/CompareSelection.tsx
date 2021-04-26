import React from 'react';
import { Container as DragContainer, Draggable } from 'react-smooth-dnd';

import useStyles from './styles';
import * as helpers from '../../helpers';

interface CompareSelectionProps {
    compare: Array<any>;
    handleDrop: (newData) => void;
}

export default function CompareSelection(props: CompareSelectionProps) {
    const { compare, handleDrop } = props;
    return (
        <div>
            <DragContainer
                // dragClass='drag-class'
                // dragHandleSelector='.drag-button-item-handler'
                onDrop={(result: any) => handleDrop(helpers.applyDrag(compare, result))}
            >
                {compare.map((item, i) => (
                    <Draggable key={i}>
                        {i}
                    </Draggable>
                ))}
            </DragContainer>
        </div>
    );
}
