// import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import ReactCountryFlag from 'react-country-flag';
import ReactPlayer from 'react-player';
import { Row, Col, Pagination } from 'antd';
import { IDataProps } from '../interface/dataInterface';

interface Props {
  data: IDataProps[];
}

function VideoList({ data }: Props): JSX.Element {
  const router = useRouter();
  const { locale } = router;
  //   const { t } = useTranslation('common');

  const [page, setPage] = useState(1);
  const pageChange = (event: React.ChangeEvent, value: number) => {
    setPage(value);
  };

  return (
    <>
      <ul className="grid grid-cols-6">
        {data.map((video) => (
          <li className="p-1.5" key={video.id}>
            <ReactPlayer url={video.evidence} width="100%" height="100%" />
          </li>
        ))}
      </ul>
      {/* <GridList className={classes.gridList} cols={matchesLg ? 1 : 4}> */}
      {/* {data.map((video) => (
          <GridListTile key={video.id} className={classes.gridListTile}>
            <ReactPlayer url={video.evidence} width="100%" height="100%" />
            <GridListTileBar
              className={classes.girdListTileBar}
              title={
                <span>
                  <ReactCountryFlag countryCode={video.countryCode} svg />
                  {video.country} {video.city}
                </span>
              }
              subtitle={
                <span>
                  {t('Offender')}: {t(video.offender)} &nbsp; {t('Victim')}:{t(video.victim)}
                  <br /> {t('Date')}: {video.date} &nbsp; {t('Level')}:{video.level}
                </span>
              }
              actionIcon={
                <Link href={`/${locale}/video/${video.id}`}>
                  <IconButton
                    // aria-label={`info about ${data.title}`}
                    className={classes.iconButton}
                    title={t('Detail')}
                  >
                    <InfoIcon />
                  </IconButton>
                </Link>
              }
            />
          </GridListTile>
        ))}
      </GridList> */}
      <Pagination defaultCurrent={1} total={50} />,
    </>
  );
}

export default VideoList;
