import clsx from 'clsx';
import Link from 'next/link';

import styles from './styles.module.scss';
import { ArrowRight } from '../icons';


export const SelectCard = ({
    label = '',
    link = '/',
}) => (
    // eslint-disable-next-line react/react-in-jsx-scope
    <>
        {/* eslint-disable-next-line react/react-in-jsx-scope */}
        <Link href={`/${link}`}>
            {/* eslint-disable-next-line react/react-in-jsx-scope */}
            <a href={`/${link}`}>
                {/* eslint-disable-next-line react/react-in-jsx-scope */}
                <div className={clsx(styles.select_card, 'd-flex justify-content-between align-items-center fp1_black mb-3 cursor-pointer')}>
                    {label}
                    {' '}
                    {/* eslint-disable-next-line react/react-in-jsx-scope */}
                    <ArrowRight />
                </div>
            </a>
        </Link>
    </>
);
