import '../global_styles/app.scss';

import AppSvg from '../svg/AppSvg';

export default function Loader() {
    return (
        <div className='loader-container'>
            <div className='loader-container_loader-box'>
                <AppSvg className='loader-container_loader-box__icon loader-icon-1' type='gpu' />
                <AppSvg className='loader-container_loader-box__icon loader-icon-2' type='cpu' />
                <AppSvg className='loader-container_loader-box__icon loader-icon-3' type='culler' />
                <AppSvg className='loader-container_loader-box__icon loader-icon-4' type='ram' />
            </div>
            <p className='loader-container__note'>Идёт загрузка...</p>
        </div>
    )
}