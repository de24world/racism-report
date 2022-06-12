// import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import ReactCountryFlag from 'react-country-flag';
import ReactPlayer from 'react-player';
import { Card, Row, Col, Pagination } from 'antd';
import { IData } from '../interface/dataInterface';

interface Props {
  post: any;
}

function Detail({ post }: Props): JSX.Element {
  //   console.log(post, 'test : post in Detail');
  const { Meta } = Card;

  return (
    <>
      Detail
      <Card
        hoverable
        //   style={{ width: '100%', height: '100%' }}
        cover={<ReactPlayer url={post.evidence} width="100%" />}
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
        <p>offender : {post.offender} </p>
        <p>victim : {post.victim}</p>
        <p>place : {post.place}</p>
        <p>occurDate : {post.occurDate}</p>
        <p>level : {post.level}</p>
        <p>description : {post.description}</p>
        <p>submit : {post.submitTime}</p>
      </Card>
    </>
  );
}

export default Detail;
