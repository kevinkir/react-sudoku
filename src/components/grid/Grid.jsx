import React from 'react';
import PropTypes from 'prop-types';

import { range } from '../../helpers/array';
import { Cell } from '../cell/Cell';
import './Grid.css';

export const Grid = (props) => {
    const createRow = (row) =>
        range(0, props.size).map((col) => (
            <td className='grid-cell' key={col}>
                <Cell
                    disabled={!props.isCellEditable(row, col)}
                    onChange={(value) => props.updateCell(row, col, value)}
                    value={props.cellValue(row, col)}
                />
            </td>
        ));
    const rows = range(0, props.size).map((row) => (
        <tr className='grid-row' key={row}>
            {createRow(row)}
        </tr>
    ));
    return (
        <table className='grid'>
            <tbody>{rows}</tbody>
        </table>
    );
};

Grid.propTypes = {
    cellValue: PropTypes.func.isRequired,
    isCellEditable: PropTypes.func.isRequired,
    size: PropTypes.number.isRequired,
    updateCell: PropTypes.func.isRequired,
};
