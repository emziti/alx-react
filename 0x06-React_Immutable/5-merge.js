import { List, Map } from 'immutable';

export const concatElements = (page1, page2) => List(page1).concat(List(page2));

