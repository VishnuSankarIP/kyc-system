export { default as AppView } from './app-view';

// import React, { useContext, Suspense, lazy } from 'react';
// import { Context } from 'src/routes/Store';

// const MicAdmin = lazy(() => import('./mic_admin'));
// const Approver = lazy(() => import('./approver'));
// const DataEntry = lazy(() => import('./data_entry'));
// const CompanyAdmin = lazy(() => import('./company_admin'));

// const AppView = () => {
//   const { state } = useContext(Context);
//   const { userType } = state.user_data;

//   let ComponentToRender;

//   switch (userType) {
//     case 'mic_admin':
//       ComponentToRender = MicAdmin;
//       break;
//     case 'company_admin':
//       ComponentToRender = CompanyAdmin;
//       break;
//     case 'data_entry':
//       ComponentToRender = DataEntry;
//       break;
//     case 'approver':
//       ComponentToRender = Approver;
//       break;
//     default:
//       ComponentToRender = null;
//   }

//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       {ComponentToRender ? <ComponentToRender /> : <div>No component found for user type</div>}
//     </Suspense>
//   );
// };

// export default AppView;

