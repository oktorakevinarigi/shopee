import React, { useEffect, useState } from 'react'
import { Layout, Card, Icon, InputNumber, Select, Button, Row, Col } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import numeral from 'numeral'
import * as ActHome from '../redux/ac-home'
const { Header, Content } = Layout;
const { Option } = Select;

export default function Home() {
    const stateHome = useSelector(state => state.Home)
    const [state, setState] = useState({
        filterMataUang: stateHome.form.filter
    })
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(ActHome.getData())
        handleChange(stateHome.form.filter)
    }, [stateHome.form.filter])

    const onChange = (property, value) => {
        dispatch(ActHome.handleState(property, value))
    }

    const handleChange = (value) => {
        setState({
            ...state,
            filterMataUang: value
        })
    }

    const submit = () => {
        dispatch(ActHome.handleState('filter', state.filterMataUang))
    }

    const remove = (data) => {
        let list = stateHome.form.filter
        let removeItem = list.filter(x => x !== data)
        dispatch(ActHome.handleState('filter', removeItem))
    }

    const CompCard = () => {
        return stateHome.dataSource.map((x, i) => {
            return (
                <Card className='contentCard' key={i}>
                    <div className='cardBlock'>
                        <div style={{ flex: 1 }}>
                            <div className='cardHeader'>
                                <div>{x.label}</div>
                                <div>{numeral(x.nominal * stateHome.form.nominal).format('0,0.00')}</div>
                            </div>
                            <div className='cardLabel'>{x.label + " - " + x.nama}</div>
                            <div style={{ fontStyle: 'italic' }}>1 USD = {x.label + " " + x.nominal}</div>
                        </div>
                        {stateHome.form.filter.length !== 0 ?
                            <div className='cardRemove'>
                                <Icon type="delete" theme="twoTone" twoToneColor="#ff4d4f" style={{ fontSize: '20px' }} onClick={() => { remove(x.label) }} />
                            </div>
                            :
                            null
                        }

                    </div>
                </Card>
            )
        })
    }

    return (
        <Layout>
            <Header className='herader'>
                <div className='lineHeader'>USD - United States Dollars</div>
                <div style={{ lineHeight: '3', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <div className='lineHeader'>USD</div>
                    <div className='lineHeader'>
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
            </Header>
            <Content className='content'>
                <div className='contentBlock'>
                    {
                        CompCard()
                    }
                    <Row type='flex' justify='end'>
                        <Col span={19}>
                            <Select
                                mode="multiple"
                                placeholder="Add more Currencies"
                                value={state.filterMataUang}
                                onChange={handleChange}
                                style={{ width: '100%' }}
                            >
                                {
                                    stateHome.form.sourceFilter.map((x, i) => {
                                        return (
                                            <Option key={i} value={x.MataUang}>{x.MataUang}</Option>
                                        )
                                    })
                                }
                            </Select>
                        </Col>
                        <Col span={5}>
                            <Button type="primary" style={{marginLeft:'10px'}} onClick={submit}>Submit</Button>
                        </Col>
                    </Row>
                </div>
            </Content>
        </Layout>
    )
}