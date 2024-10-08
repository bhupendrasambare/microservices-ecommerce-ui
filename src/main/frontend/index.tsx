import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import 'bootstrap/dist/css/bootstrap.css';
import 'tiny-slider/dist/tiny-slider.css';
import 'react-quill/dist/quill.snow.css';
import 'Frontend/themes/microservices-ecommerce-ui/styles.css';
import 'Frontend/themes/microservices-ecommerce-ui/styles.scss'
import { persistor, store } from "Frontend/storage";
import { PersistGate } from "redux-persist/integration/react";
import App from "Frontend/app";

const container = document.getElementById("outlet")

if (container) {
  const root = createRoot(container)

  root.render(
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
              <App />
          </PersistGate>
      </Provider>,
    )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}