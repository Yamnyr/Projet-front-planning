import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import moment from 'moment';
/*
import saveData from "./test";*/


export function Form() {
    const group = [{id:1, lib_groupe:'LP_WIMSI'},{id:2, lib_groupe:'groupe A'},{id:3, lib_groupe:'groupe B'},{id:4, lib_groupe:'Dept. Informatique'},{id:4, lib_groupe:'Dept. Informatique'},{id:4, lib_groupe:'Dept. Informatique'},{id:4, lib_groupe:'Dept. Informatique'},{id:4, lib_groupe:'Dept. Informatique'}]
    const { register, handleSubmit } = useForm();

    const OnSubmit = data => {
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(OnSubmit)}>
            <h1>Nouvel Evenement</h1>
            <label>Nom</label>
            <input type={"text"} id={"nom"} name={"nom"}/>
            <label>Date</label>
            <input name="date" type={"date"} id={"date"} max={moment().format("YYYY-MM-DD")}/>
            <label>Description</label>
            <textarea name="description" id={"description"}/>
            <label>Groupe concerné</label>
            {/*<select name="groupes" multiple>
                {group.map(group => <option key={group.id}>{`${group.lib_groupe}`}</option>)}
            </select>{`${group.lib_groupe}`}*/}
            <div className="scroll">
                {group.map(group =>
                    <label className={"checkbox"}>
                        <input className={"checkbox"} type="checkbox" id={group.id} name="interest" value="cooking"></input>
                        <span>{`${group.lib_groupe}`}</span>
                    </label>
                )}
            </div>
            <input type="submit" className="submitButton" />
        </form>
    );
}

export default function EventAdd() {
    return (
            <Form />
    );
}