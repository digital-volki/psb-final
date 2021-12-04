import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useDispatch } from 'Components/GeneralCtx';

import { useOnClickOutside } from 'Lib/hooks/useOutsideClick';
import { mainStore as main_store } from '../../lib/store/main';
import styles from './styles.module.scss';


export const Search = ({
    openSearch = false,
}) => {
    const headerRef = useRef(null);
    const [, setIsSearch] = useState(openSearch);
    const dp = useDispatch();
    const { register, watch } = useForm({
        defaultValues: {
            search: '',
        },
    });

    const setSearch = data => {
        dp(main_store.actions.setFilters(data));
    };

    useEffect(() => {
        const ss = watch((s, v) => (setSearch({ search: s[v.name] })));
        return () => ss.unsubscribe();
    }, [watch]);

    useOnClickOutside(headerRef, () => {
        setIsSearch(false);
    });
    return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <div>
            {/* eslint-disable-next-line react/react-in-jsx-scope */}
            <div className='mx-1 rounded border border-1 brdr-6 py-2 ps-3 bg-lght d-flex align-items-center'>
                {/* eslint-disable-next-line react/react-in-jsx-scope */}
                <input className={styles.input} placeholder='Поиск по курсам' {...register('search_desktop')} />

            </div>
        </div>
    );
};
