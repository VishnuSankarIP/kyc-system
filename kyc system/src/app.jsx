/* eslint-disable perfectionist/sort-imports */
import 'src/global.css';

import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

import { useEffect } from 'react';
import Router from 'src/routes/sections';
import ThemeProvider from 'src/theme';

// ----------------------------------------------------------------------

export default function App() {
	useScrollToTop();
	useEffect(() => {
	console.log("in app")
	}, [])
	

  return (
	  <ThemeProvider>
        	<Router />
      </ThemeProvider>
  );
}
