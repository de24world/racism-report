// import { realtimeDB } from '../../firebase';
// import { ref, child, get } from 'firebase/database';

// const dbRef = ref(realtimeDB);
// get(child(dbRef, `reportDB`))
//   .then((snapshot) => {
//     if (snapshot.exists()) {
//       console.log(snapshot.val(), 'snapshot.val() in realtimeDB!!!');
//     } else {
//       console.log('No data available in realTimeDB');
//     }
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// export default async (req, res) => {
//   res.status(200).json({
//     total: snapshot.val(),
//   });
// };
