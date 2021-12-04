import React, { useEffect } from 'react';
import G6 from '@antv/g6';
import insertCss from 'insert-css';


const Rels = () => {
    useEffect(() => {
        // 我们用 insert-css 演示引入自定义样式
        // 推荐将样式添加到自己的样式文件中
        // 若拷贝官方代码，别忘了 npm install insert-css
        insertCss(`
  .g6-component-tooltip {
    background-color: rgba(0,0,0, 0.65);
    padding: 10px;
    box-shadow: rgb(174, 174, 174) 0px 0px 10px;
    width: fit-content;
    color: #fff;
    border-radius = 4px;
  }
`);

        // mocked data
        const mockData = {
            id: 'g1',
            name: 'Исполняет',
            status: 'G',
            children: [
                {
                    id: 'g12',
                    name: 'Deal with LONG label LONG label LONG label LONG label',
                    status: 'R',
                },
                {
                    id: 'g13',
                    name: 'Deal with LONG label LONG label LONG label LONG label',
                    status: 'R',
                },
            ],
        };
        //  组件props
        const props = {
            data: mockData,
            config: {
                padding: [20, 50],
                defaultLevel: 3,
                defaultZoom: 0.8,
                modes: { default: ['zoom-canvas', 'drag-canvas'] },
            },
        };

        const container = document.getElementById('container');
        const width = container.scrollWidth;
        const height = container.scrollHeight || 500;

        // 默认配置
        const defaultConfig = {
            width,
            height,
            modes: {
                default: ['zoom-canvas', 'drag-canvas'],
            },
            fitView: true,
            animate: true,
            defaultNode: {
                type: 'flow-rect',
            },
            defaultEdge: {
                type: 'cubic-horizontal',
                style: {
                    stroke: '#CED4D9',
                },
            },
            layout: {
                type: 'indented',
                direction: 'LR',
                dropCap: false,
                indent: 300,
                getHeight: () => 60,
            },
        };

        // 自定义节点、边
        const registerFn = () => {
            /**
             * 自定义节点
             */
            G6.registerNode(
                'flow-rect',
                {
                    shapeType: 'flow-rect',
                    draw(cfg, group) {
                        const {
                            name = '',
                            collapsed,
                            id,
                        } = cfg;
                        const grey = '#CED4D9';
                        // 逻辑不应该在这里判断
                        const rectConfig = {
                            width: id === 'g1' ? 202 : 540,
                            height: id === 'g1' ? 60 : 110,
                            lineWidth: 1,
                            fontSize: 12,
                            fill: '#fff',
                            radius: 4,
                            stroke: grey,
                            opacity: 1,
                        };

                        const nodeOrigin = {
                            x: -rectConfig.width / 3,
                            y: -rectConfig.height / 3,
                        };

                        const textConfig = {
                            textAlign: 'left',
                            textBaseline: 'bottom',
                        };

                        const rect = group.addShape('rect', {
                            attrs: {
                                x: nodeOrigin.x,
                                y: nodeOrigin.y,
                                ...rectConfig,
                            },
                        });

                        // const rectBBox = rect.getBBox();

                        // label title
                        group.addShape('text', {
                            attrs: {
                                ...textConfig,
                                x: 20 + nodeOrigin.x,
                                y: 40 + nodeOrigin.y,
                                text: name.length > 28 ? `${name.substr(0, 28)}...` : name,
                                fontSize: 24,
                                opacity: 0.85,
                                fill: '#000',
                                cursor: 'pointer',
                            },
                            name: 'name-shape',
                        });
                        // group.addShape('rect', {
                        //     attrs: {
                        //         x: nodeOrigin.x,
                        //         y: -rectBBox.maxY + nodeOrigin.y + (id === 'g1') ? 110 : 60,
                        //         width: 4,
                        //         height: rectBBox.maxY,
                        //         radius: [rectConfig.radius, 0, 0, rectConfig.radius],
                        //         fill: colors[status],
                        //     },
                        // });
                        if (cfg.children && cfg.children.length) {
                            group.addShape('rect', {
                                attrs: {
                                    x: rectConfig.width / 2 - 8,
                                    y: -8,
                                    width: 16,
                                    height: 16,
                                    stroke: 'rgba(0, 0, 0, 0.25)',
                                    cursor: 'pointer',
                                    fill: '#fff',
                                },
                                name: 'collapse-back',
                                modelId: cfg.id,
                            });

                            // collpase text
                            group.addShape('text', {
                                attrs: {
                                    x: rectConfig.width / 2,
                                    y: -1,
                                    textAlign: 'center',
                                    textBaseline: 'middle',
                                    text: collapsed ? '+' : '-',
                                    fontSize: 16,
                                    cursor: 'pointer',
                                    fill: 'rgba(0, 0, 0, 0.25)',
                                },
                                name: 'collapse-text',
                                modelId: cfg.id,
                            });
                        }

                        // eslint-disable-next-line react/no-this-in-sfc
                        this.drawLinkPoints(cfg, group);
                        return rect;
                    },
                    update(cfg, item) {
                        const group = item.getContainer();
                        // eslint-disable-next-line react/no-this-in-sfc
                        this.updateLinkPoints(cfg, group);
                    },
                    setState(name, value, item) {
                        if (name === 'collapse') {
                            const group = item.getContainer();
                            const collapseText = group.find(e => e.get('name') === 'collapse-text');
                            if (collapseText) {
                                if (!value) {
                                    collapseText.attr({
                                        text: '-',
                                    });
                                } else {
                                    collapseText.attr({
                                        text: '+',
                                    });
                                }
                            }
                        }
                    },
                    getAnchorPoints() {
                        return [
                            [0, 0.5],
                            [1, 0.5],
                        ];
                    },
                },
                'rect',
            );

            G6.registerEdge(
                'flow-cubic',
                {
                    getControlPoints(cfg) {
                        let { controlPoints } = cfg; // 指定controlPoints
                        if (!controlPoints || !controlPoints.length) {
                            const { startPoint, endPoint, sourceNode, targetNode } = cfg;
                            const { x: startX, y: startY, coefficientX, coefficientY } = sourceNode
                                ? sourceNode.getModel()
                                : startPoint;
                            const { x: endX, y: endY } = targetNode
                                ? targetNode.getModel() : endPoint;
                            let curveStart = (endX - startX) * coefficientX;
                            let curveEnd = (endY - startY) * coefficientY;
                            curveStart = curveStart > 40 ? 40 : curveStart;
                            curveEnd = curveEnd < -30 ? curveEnd : -30;
                            controlPoints = [
                                { x: startPoint.x + curveStart, y: startPoint.y },
                                { x: endPoint.x + curveEnd, y: endPoint.y },
                            ];
                        }
                        return controlPoints;
                    },
                    getPath(points) {
                        const path = [];
                        path.push(['M', points[0].x, points[0].y]);
                        path.push([
                            'C',
                            points[1].x,
                            points[1].y,
                            points[2].x,
                            points[2].y,
                            points[3].x,
                            points[3].y,
                        ]);
                        return path;
                    },
                },
                'single-line',
            );
        };

        registerFn();

        const { data } = props;
        let graph = null;

        const initGraph = data => {
            if (!data)
                return;

            const { onInit, config } = props;
            const tooltip = new G6.Tooltip({
                // offsetX and offsetY include the padding of the parent container
                offsetX: 20,
                offsetY: 30,
                // the types of items that allow the tooltip show up
                // 允许出现 tooltip 的 item 类型
                itemTypes: ['node'],
                // custom the tooltip's content
                // 自定义 tooltip 内容
                getContent: e => {
                    const outDiv = document.createElement('div');
                    // outDiv.style.padding = '0px 0px 20px 0px';
                    const nodeName = e.item.getModel().name;
                    let formatedNodeName = '';
                    // eslint-disable-next-line no-plusplus
                    for (let i = 0; i < nodeName.length; i++) {
                        formatedNodeName = `${formatedNodeName}${nodeName[i]}`;
                        if (i !== 0 && i % 20 === 0)
                            formatedNodeName = `${formatedNodeName}<br/>`;
                    }
                    outDiv.innerHTML = '';
                    return outDiv;
                },
                shouldBegin: e => e.target.get('name') === 'name-shape',
            });
            graph = new G6.TreeGraph({
                container: 'container',
                ...defaultConfig,
                ...config,
                plugins: [tooltip],
            });
            if (typeof onInit === 'function')
                onInit(graph);

            graph.data(data);
            graph.render();
            graph.zoom(config.defaultZoom || 1);

            const handleCollapse = e => {
                const { target } = e;
                const id = target.get('modelId');
                const item = graph.findById(id);
                const nodeModel = item.getModel();
                nodeModel.collapsed = !nodeModel.collapsed;
                graph.layout();
                graph.setItemState(item, 'collapse', nodeModel.collapsed);
            };
            graph.on('collapse-text:click', e => {
                handleCollapse(e);
            });
            graph.on('collapse-back:click', e => {
                handleCollapse(e);
            });
        };

        initGraph(data);

        if (typeof window !== 'undefined') {
            window.onresize = () => {
                if (!graph || graph.get('destroyed'))
                    return;
                if (!container || !container.scrollWidth || !container.scrollHeight)
                    return;
                graph.changeSize(container.scrollWidth, container.scrollHeight);
            };
        }
    }, []);

    return (
        <>
            <div id='container' />
        </>
    );
};

export default Rels;
