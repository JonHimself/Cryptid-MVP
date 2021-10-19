import React, { useState, useEffect } from 'react'
import Loader from '../components/Loader'
import { connect } from "react-redux";
import { Select, Typography, Row, Col, Card, Avatar} from 'antd';
import moment from 'moment'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import { useGetCryptosQuery } from '../services/cryptoApi'
import { useGetEventQuery } from '../services/eventApi';

const { Text, Title } = Typography;
const { Option } = Select;

const demoImage = 'http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg'

const News = ({darkTheme, simplified}) => {
    const [ newsCategory, setNewsCategory] = useState('Cryptocurrency')
    const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 9 : 30})
    const { data: crypto } = useGetCryptosQuery(100);
    const { data: eventData } = useGetEventQuery();

    if(!cryptoNews?.value) return <Loader />
    return (
        <Row gutter={[24, 24]}>
            {!simplified && (
                <Col span={24}>
                    <Select showSearch className='select-news' placeholder='Select a Crypto' optionFilterProp='children' onChange={(value) => setNewsCategory(value)} filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                        <Option value='Cryptocurrency'>Cryptocurrency</Option>
                        {crypto?.data?.coins.map( (coin) => <Option value={coin.name}>{coin.name}</Option>)}
                    </Select>
                </Col>
            )}
            {eventData?.data.map((event, i) => (
                <Col xs={24} sm={12} lg={8} key={i}>
                <Card hoverable className='news-card'>
                    <a href={event.website} target='_blank' rel='noreferrer'>
                        <div className="news-image-container">
                            <Title className='news-title' level={4}>{event.title}</Title>
                        </div>
                        <p className={`${darkTheme === true ? 'dark' : ''}`}>
                            {event.description > 100 ? `${event.description.substring(0, 100)}...`
                            : event.description
                            }
                        </p>
                        <div className="provider-container">
                            <div>
                                <Text className='provider-name'>{event.title}</Text>
                            </div>
                                <Text>{moment(event.start_date).startOf('ss').fromNow()}</Text>
                        </div>
                    </a>
                </Card>
            </Col>
            ))}
            {cryptoNews?.value.map((news, i) =>(
                <Col xs={24} sm={12} lg={8} key={i}>
                    <Card  hoverable className='news-card'>
                        <a href={news.url} target='_blank' rel='noreferrer'>
                            <div className="news-image-container">
                                <Title className='news-title' level={4}>{news.name}</Title>
                                <img style={{maxWidth: '200px', maxHeight: '100px'}} src={news?.image?.thumbnail?.contentUrl || demoImage } alt="news" />
                            </div>
                            <p>
                                {news.description > 100 ? `${news.description.substring(0, 100)}...`
                                : news.description
                                }
                            </p>
                            <div className="provider-container">
                                <div>
                                    <Avatar  src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt='news' />
                                    <Text className='provider-name'>{news.provider[0]?.name}</Text>
                                </div>
                                    <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                            </div>
                        </a>
                    </Card>
                </Col>
                ))}
        </Row>
    )
}

const mapStateToProps = (state) => {
    return { darkTheme: state.darkTheme.darkTheme}
}

export default connect(mapStateToProps)(News)
