import { render } from '@testing-library/react';
import userEvent, { PointerEventsCheckLevel } from '@testing-library/user-event';
import React, { ReactNode } from 'react';
import { StyleSheetManager } from 'styled-components';

const CustomRender = ({ children }: { children?: ReactNode }) => (
	<StyleSheetManager disableVendorPrefixes>{children}</StyleSheetManager>
);

type TRenderParameters = Parameters<typeof render>;

const customRender = (ui: TRenderParameters[0], options?: TRenderParameters[1]) =>
	render(ui, { wrapper: CustomRender, ...options });

export const user = userEvent.setup({
	pointerEventsCheck: PointerEventsCheckLevel.Never,
	delay: null,
});

export * from '@testing-library/react';
export { customRender as render };
