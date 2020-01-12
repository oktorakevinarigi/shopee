import React, { useEffect } from 'react'
import { Layout, Card, Icon, InputNumber, Select } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import * as ActHome from '../redux/ac-home'
import numeral from 'numeral'

const { Header, Footer, Sider, Content } = Layout;
const { Option } = Select;

export default function Home() {
    const stateHome = useSelector(state => state.Home)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(ActHome.getData())
    }, [])

    const onChange = (property, value) => {
        dispatch(ActHome.handleState(property, value))
    }

    return (
        <Layout>
            <Header style={{ backgroundColor: '#40a9ff', height: '100px' }}>
                <div>
                    <div style={{ lineHeight: '3' }}>USD - United States Dollars</div>
                    <div style={{ lineHeight: '3', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <div style={{ lineHeight: '3' }}>USD</div>
                        <div style={{ lineHeight: '3' }}>
                            <InputNumber
                                defaultValue={stateHome.form.nominal}
                                formatter={value => value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                parser={value => value.replace(/(,*)/g, '')}
                                onChange={(value) => onChange('nominal', value)}
                                min={1}
                                style={{ width: '150px' }}
                            />
                        </div>
                    </div>
                </div>
            </Header>
            <Content>
                {stateHome.dataSource.map((x, i) => {
                    return (
                        <div style={{ margin: '30px 50px 0px 50px' }} key={i}>
                            <Card>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ display: 'flex', lineHeight: '50px', flexDirection: 'row', justifyContent: 'space-between', fontSize: '25px', fontWeight: 'bold' }}>
                                            <div>{x.label}</div>
                                            <div>{numeral(Number(x.nominal * stateHome.form.nominal).toFixed(2)).format('0,0.00')}</div>
                                        </div>
                                        <div style={{ fontSize: '17px', fontStyle: 'italic', fontWeight: '500' }}>{x.label + " - " + x.nama}</div>
                                        <div style={{ fontStyle: 'italic' }}>1 USD = {x.label + " " + x.nominal}</div>
                                    </div>
                                    <div style={{ width: '50px', marginLeft: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <Icon type="delete" theme="twoTone" twoToneColor="#ff4d4f" style={{ fontSize: '20px' }} onClick={() => { }} />
                                    </div>
                                </div>
                            </Card>
                        </div>
                    )
                })}
                {/* <Select
                    mode="multiple"
                    // size={size}
                    placeholder="Please select"
                    defaultValue={['a10', 'c12']}
                    // onChange={handleChange}
                    style={{ width: '100%' }}
                >
                    {children}
                </Select> */}
            </Content>
            <Footer></Footer>
        </Layout>
    )
}