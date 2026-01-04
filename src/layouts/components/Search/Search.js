import classNames from 'classnames/bind';
import { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import Style from './Search.module.scss';
import { WeatherContext } from '~/context';

const cx = classNames.bind(Style);

function Search() {
    const { setCityName } = useContext(WeatherContext);
    const [value, setValue] = useState('');

    // console.log(setCityName);

    const handleSearch = () => {
        if (!value.trim()) return;
        setCityName(value);
    };

    return (
        <div className={cx('search')}>
            <input
                className={cx('search-input')}
                placeholder="Nhập tên thành phố..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button className={cx('search-btn')}>
                <FontAwesomeIcon onClick={handleSearch} className={cx('search-icon')} icon={faMagnifyingGlass} />
            </button>
        </div>
    );
}

export default Search;
