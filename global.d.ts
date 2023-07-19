/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */

import '@testing-library/jest-dom/extend-expect';
import { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers';

declare global {
	namespace jest {
		interface Matchers<R = void> extends TestingLibraryMatchers<R> {}
	}
}
