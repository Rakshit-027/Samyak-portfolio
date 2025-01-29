import React from 'react';
import styled from 'styled-components';
import { BarChart2, TrendingUp, Database } from 'lucide-react';

const Card = (props) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="first-content">
          <span>{props.skill}</span>
        </div>
        <div className="second-content">
         <div className="list"><li className='li'><BarChart2 size={30}/>{props.first}</li>
          <li className='li'><BarChart2 size={30}/>{props.second}</li>
          <li className='li'><BarChart2 size={30}/>{props.third}</li>
          <li className='li'><BarChart2 size={30}/>{props.fourth}</li>
          <li className='li'><BarChart2 size={30}/>{props.fifth}</li></div> 
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`


.list{
list-style-type: none;
flex-direction: column;
gap: 40px;
aliginn-items: center;
jutify-content: center;
color: white;
font-weight: bold;


}  

.card {
    width: 250px;
    height: 300px;
    background:#485563;
    transition: all 0.4s;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 5px  rgba(0, 0, 0, 0.705);
    font-size: 30px;
    font-weight: 900;
    border:solid white 2px;
  }

  .card:hover {
    border-radius: 15px;
    cursor: pointer;
    transform: scale(1.2);
    box-shadow: 0px 0px 10px 5px  rgba(0, 0, 0, 0.705);
    background: #485563;
  }

  .first-content {
    height: 100%;
    width: 100%;
    transition: all 0.4s;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;
    border-radius: 15px;
    font-size: 20px;
  }

  .card:hover .first-content {
    height: 0px;
    opacity: 0;
  }

  .second-content {
    height: 0%;
    width: 100%;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    transition: all 0.4s;
    font-size: 20px;
    transform: rotate(90deg) scale(-1);
    line-height: 50px;
  }

  .card:hover .second-content {
    opacity: 1;
    height: 100%;
    font-size: 1rem;
    transform: rotate(0deg);
  }`;

export default Card;
