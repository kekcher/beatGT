import './scss/assembly.scss';

import { Await, defer, useLoaderData, useNavigate } from 'react-router-dom';

import { Suspense, useState } from 'react';

import { PageLoader } from '../../global_components/Loader';

import NotFound from '../not_found/NotFound';

import { assembly } from '../../constants'

import { GetAssembly } from '../../service/route';

import { AssemblyComponent } from './components/assembly_components';

import { assembLike } from '../../service/route';

export const AssemblyLoader = async () => {

    const searchParams = new URLSearchParams(window.location.search);

    const id = searchParams.get('id');

    const assemblyInfo = await GetAssembly(id);


    return defer({
        assemblyInfo: assemblyInfo
    });
}

export default function Assembly() {

    const { assemblyInfo } = useLoaderData();

    const userId = JSON.parse(localStorage.getItem('user'))?.id;

    const [assemblyLike, setAssemblyLike] = useState(false);

    //Функция оценки
    function getLike(user_id, assembly_id) {
        const data = {
            user_id: user_id,
            assembly_id: assembly_id
        };

        assembLike(data)
            .then(d => setAssemblyLike(d.like))
            .catch(e => alert('Что-то пошло не так'))
    }

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
                                {console.log(data['likes'])}
                                <p className='assembly-box_footer-box__price'>Итого: {data['price']} Руб.</p>
                                <button
                                    onClick={() => getLike(userId, data['assembly_id'])}
                                    disabled={!localStorage.getItem('jwtToken')}
                                    className={data['likes'].includes(userId) || assemblyLike ? 'assembly-box_footer-box__like-btn assembly-box_footer-box__like-btn_dislike' : 'assembly-box_footer-box__like-btn assembly-box_footer-box__like-btn_like'}
                                >
                                    {data['likes'].includes(userId) || assemblyLike ? 'Разонравилось' : 'Понравилось'}
                                </button>
                            </div>
                        </div>
                    )
                }
            </Await>
        </Suspense >

    )
}