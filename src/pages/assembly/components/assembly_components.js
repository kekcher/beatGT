export function AssemblyComponent({ logo, price, onClick, children }) {
    return (
        <li className='assembly-box_component-list_row'>
            <img className='assembly-box_component-list_row__logo' src={logo} alt='Изображение отсутствует' />
            <p className='assembly-box_component-list_row__note'>{children}</p>
            <div className='assembly-box_component-list_row_info-box'>
                <p className='assembly-box_component-list_row_info-box__price'>{price} Руб.</p>
                <button onClick={onClick} className='assembly-box_component-list_row_info-box__go-to-component'>Полная информация</button>
            </div>
        </li>
    )
}