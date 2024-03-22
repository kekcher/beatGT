import { AppContext } from "../../App"

import { useContext, useState } from "react"

import AppSvg from "../../svg/AppSvg"

import { component_header, pc_components } from '../../constants'

import "./scss/component.scss"

export default function Component() {
    const { location, navigate, deviceSize } = useContext(AppContext);

    const [compWindow, setCompWindow] = useState(true);

    const searchParams = new URLSearchParams(location.search)

    //Достаём из параметров тип комплектующего
    const type_component = searchParams.get('type');

    return (
        <div className="pc-component-container">
            {
                (!type_component || !pc_components[type_component]) && (
                    <h1 style={{color: 'white'}}>Компонент не найден :(</h1>
                )
            }
            {
                type_component && pc_components[type_component] && (
                    <>
                        <h1 className="pc-component-container__head">{component_header[type_component]}</h1>

                        <ul className={deviceSize < 720 && !compWindow ? "none" : "pc-component-container_note-box"}>
                            {
                                pc_components[type_component].map((item, idx) => {
                                    return (
                                        <li key={idx}>
                                            <p className="pc-component-container_note-box__note">{item['note']}</p>
                                            <p className="pc-component-container_note-box__note-item">Arut tyt tam vav janklod vandam oman grow street home</p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <div className={deviceSize < 720 && compWindow ? "none" : "pc-component-container_logo-box"}>
                            <img className="pc-component-container_logo-box__logo" src='https://fikiwiki.com/uploads/posts/2022-02/1644855636_51-fikiwiki-com-p-kartinki-khd-kachestva-54.jpg' alt='нет' />
                        </div>
                        {
                            deviceSize < 720 && (
                                <div className='choose-box'>
                                    <AppSvg onClick={() => setCompWindow(!compWindow)} className="row-svg" type='left-row' />
                                    <AppSvg onClick={() => setCompWindow(!compWindow)} className="row-svg" type='right-row' />
                                </div>
                            )
                        }
                    </>
                )
            }
        </div>
    )


}