import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import { configure } from '@testing-library/react';

configure({ testIdAttribute: 'data-test-id' });
