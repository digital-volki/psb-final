import { useRouter } from 'next/router';
import clsx from 'clsx';
import fp from 'lodash/fp';

import styles from './styles.module.scss';
import { Button } from '../Button';


const args = (isActive = false) => ({
    variant: isActive ? 'orng' : 'blue2',
    color: isActive ? 'white' : '#A2B5CD',
});

export const GroupButtons = ({
    tabs = [],
    type = 'pathname',
}) => {
    const { push, ...router } = useRouter();
    console.log((args().color));
    return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <div className={clsx('d-flex', styles.box, 'sh-down')}>
            {tabs.map((tab, i) => (
                // eslint-disable-next-line react/react-in-jsx-scope
                <Button
                    key={String(i)}
                    onClick={() => push(tab.path)}
                    classNames={clsx('d-flex me-3')}
                    {...args(fp.get(type, router) === tab.path)}
                >
                    {/* eslint-disable-next-line react/react-in-jsx-scope */}
                    <div style={{
                        color: (args(fp.get(type, router) === tab.path).color),
                    }}
                    >
                        {tab?.name}
                    </div>
                </Button>
            ))}
        </div>
    );
};
