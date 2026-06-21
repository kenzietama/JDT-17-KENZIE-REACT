import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import "./App.css";
import { TokenProvider } from "./hooks/useToken.tsx";
import { routes } from "./routes/index.tsx";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<TokenProvider>
			<Theme
				appearance="dark"
				accentColor="cyan"
				grayColor="slate"
				panelBackground="translucent"
				radius="medium"
			>
				<RouterProvider router={routes} />
			</Theme>
		</TokenProvider>
	</StrictMode>,
);
