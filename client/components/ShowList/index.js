import React from 'react';

// import ShowListItem from '../ShowListItem';
//
// const ShowList = ({shows}) => {
//   const renderShowList = showArr =>
//     showArr.map((show, ind) => (
//       <ShowListItem
//         key={ind}
//         show={show}
//       />
//     ));
//   return (
//     <article>
//       {renderShowList(shows)}
//     </article>
//   );
// };
//
// ShowList.propTypes = {
//   shows: React.PropTypes.array,
// };

const ShowListItem = () => (
  <article>
  <a href="https://geo.itunes.apple.com/us/movie/primer/id536457427?at=1l3vqFJ&ct=1l3vqFJ&mt=6" className="fl w-50 w-25-l link overflow-hidden">
    <div
      className="grow aspect-ratio--4x6 "
      style={{
        background: `url(https://s3-us-west-1.amazonaws.com/tachyonsio/img/primer.jpg) no-repeat center center`,
        backgroundSize: "cover",
      }}
    />
  </a>
  // <a href="https://geo.itunes.apple.com/us/movie/the-big-short/id1061320456?at=1l3vqFJ&mt=6" className="fl w-50 w-25-l link overflow-hidden">
  //   <div className="grow aspect-ratio--4x6 " style="background: url(https://s3-us-west-1.amazonaws.com/tachyonsio/img/the-big-short.jpg) no-repeat center center; background-size: cover;"></div>
  // </a>
  // <a href="https://geo.itunes.apple.com/us/movie/bottle-rocket/id315360821?at=1l3vqFJ&mt=6" className="fl w-50 w-25-l link overflow-hidden">
  //   <div className="grow aspect-ratio--4x6 " style="background: url(https://s3-us-west-1.amazonaws.com/tachyonsio/img/bottlerocket.jpg) no-repeat center center; background-size: cover;"></div>
  // </a>
  // <a href="https://geo.itunes.apple.com/us/movie/ex-machina/id983488795?at=1l3vqFJ&mt=6" className="fl w-50 w-25-l link overflow-hidden">
  //   <div className="grow aspect-ratio--4x6" style="background: url(https://s3-us-west-1.amazonaws.com/tachyonsio/img/ex-machina.png) no-repeat center center; background-size: cover;"></div>
  // </a>
  // <a href="https://geo.itunes.apple.com/us/movie/district-9/id331251689?at=1l3vqFJ&mt=6" className="fl w-50 w-25-l link overflow-hidden">
  //   <div className="grow aspect-ratio--4x6 pv" style="background: url(https://s3-us-west-1.amazonaws.com/tachyonsio/img/district9.jpg) no-repeat center center; background-size: cover;"></div>
  // </a>
  // <a href="https://geo.itunes.apple.com/us/movie/watchmen-directors-cut/id321123507?at=1l3vqFJ&mt=6" className="fl w-50 w-25-l link overflow-hidden">
  //   <div className="grow aspect-ratio--4x6 " style="background: url(https://s3-us-west-1.amazonaws.com/tachyonsio/img/watchmen.jpg) no-repeat center center; background-size: cover;"></div>
  // </a>
  // <a href="https://geo.itunes.apple.com/us/movie/sunshine/id272508664?at=1l3vqFJ&mt=6" className="fl w-50 w-25-l link overflow-hidden">
  //   <div className="grow aspect-ratio--4x6 " style="background: url(https://s3-us-west-1.amazonaws.com/tachyonsio/img/sunshine.jpg) no-repeat center center; background-size: cover;"></div>
  // </a>
  // <a href="https://geo.itunes.apple.com/us/movie/mad-max-fury-road/id990549112?at=1l3vqFJ&mt=6" className="fl w-50 w-25-l link overflow-hidden">
  //   <div className="grow aspect-ratio--4x6 " style="background: url(https://s3-us-west-1.amazonaws.com/tachyonsio/img/mad-max-2.png) no-repeat center center; background-size: cover;"></div>
  // </a>
  // <a href="https://geo.itunes.apple.com/us/movie/drive/id492170756?at=1l3vqFJ&mt=6" className="fl w-50 w-25-l link overflow-hidden">
  //   <div className="grow aspect-ratio--4x6 " style="background: url(https://s3-us-west-1.amazonaws.com/tachyonsio/img/neon-drive.jpg) no-repeat center center; background-size: cover;"></div>
  // </a>
  // <a href="https://geo.itunes.apple.com/us/movie/kill-bill-volume-1/id432516627?at=1l3vqFJ&mt=6" className="fl w-50 w-25-l link overflow-hidden">
  //   <div className="grow aspect-ratio--4x6 " style="background: url(https://s3-us-west-1.amazonaws.com/tachyonsio/img/kill-bill.jpg) no-repeat center center; background-size: cover;"></div>
  // </a>
  // <a href="https://geo.itunes.apple.com/us/movie/kill-bill-volume-2/id432516575?at=1l3vqFJ&mt=6" className="fl w-50 w-25-l link overflow-hidden">
  //   <div className="grow aspect-ratio--4x6 " style="background: url(https://s3-us-west-1.amazonaws.com/tachyonsio/img/kill-bill2.png) no-repeat center center; background-size: cover;"></div>
  // </a>
  // <a href="https://geo.itunes.apple.com/us/movie/from-dusk-till-dawn/id461537388?at=1l3vqFJ&mt=6" className="fl w-50 w-25-l link overflow-hidden">
  //   <div className="grow aspect-ratio--4x6 " style="background: url(https://s3-us-west-1.amazonaws.com/tachyonsio/img/dusktilldawn.jpg) no-repeat center center; background-size: cover;"></div>
  // </a>
  // <a href="https://geo.itunes.apple.com/us/movie/jurassic-park/id452283395?at=1l3vqFJ&mt=6" className="fl w-50 w-25-l link overflow-hidden">
  //   <div className="grow aspect-ratio--4x6 " style="background: url(https://s3-us-west-1.amazonaws.com/tachyonsio/img/jurassicpark.jpg) no-repeat center center; background-size: cover;"></div>
  // </a>
  // <a href="https://geo.itunes.apple.com/us/movie/the-place-beyond-the-pines/id641999831?at=1l3vqFJ&mt=6" className="fl w-50 w-25-l link overflow-hidden">
  //   <div className="grow aspect-ratio--4x6 " style="background: url(https://s3-us-west-1.amazonaws.com/tachyonsio/img/place-beyond-pines.jpg) no-repeat center center; background-size: cover;"></div>
  // </a>
  // <a href="https://geo.itunes.apple.com/us/movie/children-of-men/id299968409?at=1l3vqFJ&mt=6" className="fl w-50 w-25-l link overflow-hidden">
  //   <div className="grow aspect-ratio--4x6 " style="background: url(https://s3-us-west-1.amazonaws.com/tachyonsio/img/children.jpg) no-repeat center center; background-size: cover;"></div>
  // </a>
  // <a href="https://geo.itunes.apple.com/us/movie/prometheus/id547496947?at=1l3vqFJ&mt=6" className="fl w-50 w-25-l link overflow-hidden">
  //   <div className="grow aspect-ratio--4x6 " style="background: url(https://s3-us-west-1.amazonaws.com/tachyonsio/img/prometheus.jpg) no-repeat center center; background-size: cover;"></div>
  // </a>
  // <a href="https://geo.itunes.apple.com/us/movie/inglourious-basterds/id333325378?at=1l3vqFJ&mt=6" className="fl w-50 w-25-l link overflow-hidden">
  //   <div className="grow aspect-ratio--4x6 " style="background: url(https://s3-us-west-1.amazonaws.com/tachyonsio/img/inglourious_basterds.jpg) no-repeat center center; background-size: cover;"></div>
  // </a>
  // <a href="https://geo.itunes.apple.com/us/movie/moon/id331842140?at=1l3vqFJ&mt=6" className="fl w-50 w-25-l link overflow-hidden">
  //   <div className="grow aspect-ratio--4x6 " style="background: url(https://s3-us-west-1.amazonaws.com/tachyonsio/img/moon.jpg) no-repeat center center; background-size: cover;"></div>
  // </a>
  // <a href="https://geo.itunes.apple.com/us/movie/lock-stock-two-smoking-barrels/id281827014?at=1l3vqFJ&mt=6" className="fl w-50 w-25-l link overflow-hidden">
  //   <div className="grow aspect-ratio--4x6 " style="background: url(https://s3-us-west-1.amazonaws.com/tachyonsio/img/lockstock.jpg) no-repeat center center; background-size: cover;"></div>
  // </a>
  // <a href="https://geo.itunes.apple.com/us/movie/interstellar/id960891136?at=1l3vqFJ&mt=6" className="fl w-50 w-25-l link overflow-hidden">
  //   <div className="grow aspect-ratio--4x6 " style="background: url(https://s3-us-west-1.amazonaws.com/tachyonsio/img/interstellar.jpg) no-repeat center center; background-size: cover;"></div>
  // </a>
  // <a href="https://geo.itunes.apple.com/us/movie/12-monkeys/id280241027?at=1l3vqFJ&mt=6" className="fl w-50 w-25-l link overflow-hidden">
  //   <div className="grow aspect-ratio--4x6 " style="background: url(https://s3-us-west-1.amazonaws.com/tachyonsio/img/12monkeys.jpg) no-repeat center center; background-size: cover;"></div>
  // </a>
  // <a href="https://geo.itunes.apple.com/us/movie/the-professional/id270815716?at=1l3vqFJ&mt=6" className="fl w-50 w-25-l link overflow-hidden">
  //   <div className="grow aspect-ratio--4x6 " style="background: url(https://s3-us-west-1.amazonaws.com/tachyonsio/img/leon.png) no-repeat center center; background-size: cover;"></div>
  // </a>
  // <a href="https://geo.itunes.apple.com/us/movie/the-departed/id284563157?at=1l3vqFJ&mt=6" className="fl w-50 w-25-l link overflow-hidden">
  //   <div className="grow aspect-ratio--4x6 " style="background: url(https://s3-us-west-1.amazonaws.com/tachyonsio/img/departed.jpg) no-repeat center center; background-size: cover;"></div>
  // </a>
  // <a href="https://geo.itunes.apple.com/us/movie/batman-begins/id271469254?at=1l3vqFJ&mt=6" className="fl w-50 w-25-l link overflow-hidden">
  //   <div className="grow aspect-ratio--4x6 " style="background: url(https://s3-us-west-1.amazonaws.com/tachyonsio/img/batman-begins.jpg) no-repeat center center; background-size: cover;"></div>
  // </a>
</article>
);

export default ShowListItem;
