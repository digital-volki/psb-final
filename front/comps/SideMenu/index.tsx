import React from 'react';
import { Menu } from 'antd';

import { Docs, Folder, List } from 'Components/icons';


const { SubMenu } = Menu;


export const SideMenu: React.FC<{elements: any, setter?: any}> = ({
    elements,
    setter,
}) => (
    <Menu overflowedIndicator={null} mode='inline' className='bg-lght'>
        {elements.map((i: any, index: number) => {
            switch (i.collection) {
                case 'partition': {
                    return (
                        <SubMenu
                            key={String(index)}
                            icon={<div><Folder /></div>}
                            title={(<div className='pt-1 ms-1'>{i.item.name}</div>)}
                        >
                            {i.item.elements.map((i: any, sub: number) => {
                                switch (i.collection) {
                                    case 'tasks': {
                                        return (
                                            <Menu.Item
                                                onClick={id => setter(id)}
                                                key={String(`${index}:${sub}`)}
                                                icon={<div><List /></div>}
                                            >
                                                <div className='pt-1 ms-1'>{`${index + 1}.${sub + 1} ${i.item.name}`}</div>
                                            </Menu.Item>
                                        );
                                    }
                                    case 'articles': {
                                        return (
                                            <Menu.Item
                                                onClick={id => setter(id)}
                                                icon={<div><Docs /></div>}
                                                key={String(`${index}:${sub}`)}
                                            >
                                                <div className='pt-1 ms-1'>{`${index + 1}.${sub + 1} ${i.item.name}`}</div>
                                            </Menu.Item>
                                        );
                                    }
                                    default: {
                                        return <div key={String(`${index + 1}:${sub + 1}`)} />;
                                    }
                                }
                            })}
                        </SubMenu>
                    );
                }
                case 'tasks': {
                    return (
                        <Menu.Item
                            onClick={id => setter(id)}
                            icon={<List />}
                            key={String(index)}
                        >
                            <div className='pt-1 ms-1'>{`${index + 1} ${i.item.name}`}</div>
                        </Menu.Item>
                    );
                }
                case 'articles': {
                    return (
                        <Menu.Item
                            onClick={id => setter(id)}
                            icon={<Docs />}
                            key={String(index)}
                        >
                            <div className='pt-1 ms-1'>{`${index + 1} ${i.item.name}`}</div>
                        </Menu.Item>
                    );
                }
                default: {
                    return (
                        <Menu.Item
                            onClick={id => setter(id)}
                            key={String(index)}
                        >
                            <div className='pt-1 ms-1'>{i.item.name}</div>
                        </Menu.Item>
                    );
                }
            }
        })}

    </Menu>
);
