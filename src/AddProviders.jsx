import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@mantine/core/styles.css";
import PropTypes from 'prop-types'

import { MantineProvider } from "@mantine/core";

const queryClient = new QueryClient();

function AppProvider({children}) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <MantineProvider>
          {children}
        </MantineProvider>
      </QueryClientProvider>
    </>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default AppProvider;
