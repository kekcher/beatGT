import './scss/assembly.scss';

import { Await, defer, useLoaderData, useNavigate } from 'react-router-dom';

import { Suspense } from 'react';

import { PageLoader } from '../../global_components/Loader';

import NotFound from '../not_found/NotFound';

import { assembly } from '../../constants'

import { GetAssembly } from '../../service/route';

import { AssemblyComponent } from './components/assembly_components';

export const AssemblyLoader = async () => {

    const searchParams = new URLSearchParams(window.location.search);

    const id = searchParams.get('id');

    const assemblyInfo = await GetAssembly(id);


    return defer({
        assemblyInfo: assemblyInfo
    });
}

export default function Assembly() {

    const { assemblyInfo} = useLoaderData();

    //Функция перехода на 
    function goComponent(id, type) {
        window.location.href = `/component?type=${type}&id=${id}`;
    };

    return (
        <Suspense fallback={<PageLoader />}>
            <Await errorElement={<NotFound>Сборка не найдена!</NotFound>} resolve={assemblyInfo}>
                {
                    data => (
                        <div className='assembly-box'>
                            <h1 className='assembly-box__head'>{data.assembly_name}</h1>
                            <div className='assembly-box_author-box'>
                                <img className='assembly-box_author-box__avatar' src={data.author_avatar} alt='Упс' />
                                <p className='assembly-box_author-box__nickname'>{data.author}</p>
                            </div>
                            <ul className='assembly-box_component-list'>
                                {
                                    assembly.map(item => {
                                        return (
                                            <>
                                                {
                                                    data[item['code_name']].length ?
                                                        (
                                                            data[item['code_name']].map(d => {
                                                                return (
                                                                    <AssemblyComponent
                                                                        key={`${item['code_name']}${d.id}`}
                                                                        logo={d.logo}
                                                                        price={d.price}
                                                                        onClick={() => goComponent(d.id, item['type'])}
                                                                    >
                                                                        {item['note']} {d.name}
                                                                    </AssemblyComponent>
                                                                )
                                                            })
                                                        )
                                                        :
                                                        (
                                                            <AssemblyComponent
                                                                key={`${item['code_name']}${data[item['code_name']].id}`}
                                                                logo={data[item['code_name']].logo}
                                                                price={data[item['code_name']].price}
                                                                onClick={() => goComponent(data[item['code_name']].id, item['type'])}
                                                            >
                                                                {item['note']} {data[item['code_name']].name}
                                                            </AssemblyComponent>
                                                        )
                                                }
                                            </>
                                        )
                                    })
                                }
                            </ul>
                            <div className='assembly-box_footer-box'>
                                <p className='assembly-box_footer-box__price'>Итого: {data['price']} Руб.</p>
                                <button className='assembly-box_footer-box__like-btn'>Понравилось</button>
                            </div>
                        </div>
                    )
                }
            </Await>
        </Suspense >

    )
}