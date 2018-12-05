import React from 'react';
import { Link } from "react-router-dom";

export const DaftarAllStafFarmasiRow = (props) => {
    return (
        <tbody>
            {props.listAllStafFarmasi.map(staf => {
                return (
                    <tr key={staf.id}>
                        <td>{staf.nama}</td>
                        <td>{staf.jenis}</td>
                    </tr>
                )
            })}
        </tbody>
    )
}