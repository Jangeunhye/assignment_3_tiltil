"use client";
import { AuthProvider } from "@/app/(providers)/_contexts/auth.context";
import store from "./_redux/store";
import { Provider } from "react-redux";

function ProvidersLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <Provider store={store}>{children} </Provider>
    </AuthProvider>
  );
}

export default ProvidersLayout;
