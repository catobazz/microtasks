import React from "react";
import {topCarsType} from "../App";

type propsMapType = {
    cars: topCarsType[]
}

export const Map = (props: propsMapType) => {
    return (
        <div>
            <table>
                <tr>
                    <th>manufacturer</th>
                    <th>model</th>
                </tr>
                {props.cars.map(el => {
                    return (
                        <tr>
                            <td>{el.manufacturer}</td>
                            <td>{el.model}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}