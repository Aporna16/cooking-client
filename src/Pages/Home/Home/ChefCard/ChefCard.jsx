import React from 'react';
import { Card, CardGroup, Image } from 'react-bootstrap';
import { FaRegCommentAlt, FaRegHeart, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
//import { FaRegCommentAlt, FaRegHeart, FaRegStar, FaStar } from 'react-icons/fa';
//import Rating from 'react-rating';

//import ChefRecipe from '../../Chef Recipe Section/ChefRecipe';

const ChefCard = ({ chef }) => {
    const { _id, title, details, image_url, author, rating,likes,yearsOfExperience } = chef
    return (
        <div>
            <CardGroup>
                <Card className="mb-4 g-4">
                    <Card.Header className='d-flex align-items-center'>
                        <Image style={{ height: '40px' }} src={author?.img} roundedCircle />
                        <div className='ps-2 flex-grow-1'>
                            <p>{author?.name}</p>
                            <p>Experience: {yearsOfExperience}</p>
                        </div>
                        <div className='mb-0'>
                            <FaRegHeart></FaRegHeart>
                            <p>Like: {likes}</p>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Img variant="top" src={image_url} />
                        <Card.Text>
                            {details.length < 100 ? <>{details}</> :
                                <>{details.slice(0, 100)}...<Link to={`/food/${_id}`}>View Recipe</Link></>
                            }
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted d-flex">
                        <div className='flex-grow-1'>
                            <Rating
                                placeholderRating={rating.number}
                                readonly
                                emptySymbol={<FaRegStar></FaRegStar>}
                                placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                fullSymbol={<FaStar></FaStar>}
                            >
                            </Rating>
                            <span>{rating?.number}</span>
                        </div>
                        <div>
                            <FaRegCommentAlt></FaRegCommentAlt>
                            <p>Comments</p>
                        </div>
                    </Card.Footer>
                </Card>
                <Card className="mb-4 g-4">
                    <Card.Header className='d-flex align-items-center'>
                        <Image style={{ height: '40px' }} src={author?.img} roundedCircle />
                        <div className='ps-2 flex-grow-1'>
                            <p>{author?.name}</p>
                            <p>Experience: {yearsOfExperience}</p>
                        </div>
                        <div className='mb-0'>
                            <FaRegHeart></FaRegHeart>
                            <p>Like: {likes}</p>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Img variant="top" src={image_url} />
                        <Card.Text>
                            {details.length < 100 ? <>{details}</> :
                                <>{details.slice(0, 100)}...<Link to={`/food/${_id}`}>View Recipe</Link></>
                            }
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted d-flex">
                        <div className='flex-grow-1'>
                            <Rating
                                placeholderRating={rating.number}
                                readonly
                                emptySymbol={<FaRegStar></FaRegStar>}
                                placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                fullSymbol={<FaStar></FaStar>}
                            >
                            </Rating>
                            <span>{rating?.number}</span>
                        </div>
                        <div>
                            <FaRegCommentAlt></FaRegCommentAlt>
                            <p>Comments</p>
                        </div>
                    </Card.Footer>
                </Card>
                <Card className="mb-4 g-4">
                    <Card.Header className='d-flex align-items-center'>
                        <Image style={{ height: '40px' }} src={author?.img} roundedCircle />
                        <div className='ps-2 flex-grow-1'>
                            <p>{author?.name}</p>
                            <p>Experience: {yearsOfExperience}</p>
                        </div>
                        <div className='mb-0'>
                            <FaRegHeart></FaRegHeart>
                            <p>Like: {likes}</p>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Img variant="top" src={image_url} />
                        <Card.Text>
                            {details.length < 100 ? <>{details}</> :
                                <>{details.slice(0, 100)}...<Link to={`/food/${_id}`}>View Recipe</Link></>
                            }
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted d-flex">
                        <div className='flex-grow-1'>
                            <Rating
                                placeholderRating={rating.number}
                                readonly
                                emptySymbol={<FaRegStar></FaRegStar>}
                                placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                fullSymbol={<FaStar></FaStar>}
                            >
                            </Rating>
                            <span>{rating?.number}</span>
                        </div>
                        <div>
                            <FaRegCommentAlt></FaRegCommentAlt>
                            <p>Comments</p>
                        </div>
                    </Card.Footer>
                </Card>
                
                
            </CardGroup>
        </div>
    );
};

export default ChefCard;


