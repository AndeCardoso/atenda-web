import { Key } from 'react';

export interface IViewValue {
  index: Key | null | undefined;
  VIEW: string;
  VALUE: string;
}

export const ufBrStates = <IViewValue[]>[
  {VIEW: 'RO', VALUE: 'RO'},
  {VIEW: 'AC', VALUE: 'AC'},
  {VIEW: 'AM', VALUE: 'AM'},
  {VIEW: 'RR', VALUE: 'RR'},
  {VIEW: 'PA', VALUE: 'PA'},
  {VIEW: 'AP', VALUE: 'AP'},
  {VIEW: 'TO', VALUE: 'TO'},
  {VIEW: 'MA', VALUE: 'MA'},
  {VIEW: 'PI', VALUE: 'PI'},
  {VIEW: 'CE', VALUE: 'CE'},
  {VIEW: 'RN', VALUE: 'RN'},
  {VIEW: 'PB', VALUE: 'PB'},
  {VIEW: 'PE', VALUE: 'PE'},
  {VIEW: 'AL', VALUE: 'AL'},
  {VIEW: 'SE', VALUE: 'SE'},
  {VIEW: 'BA', VALUE: 'BA'},
  {VIEW: 'MG', VALUE: 'MG'},
  {VIEW: 'ES', VALUE: 'ES'},
  {VIEW: 'RJ', VALUE: 'RJ'},
  {VIEW: 'SP', VALUE: 'SP'},
  {VIEW: 'PR', VALUE: 'PR'},
  {VIEW: 'SC', VALUE: 'SC'},
  {VIEW: 'RS', VALUE: 'RS'},
  {VIEW: 'MS', VALUE: 'MS'},
  {VIEW: 'MT', VALUE: 'MT'},
  {VIEW: 'GO', VALUE: 'GO'},
  {VIEW: 'DF', VALUE: 'DF'},
].sort((cur, nex) => cur.VALUE > nex.VALUE ? 1 : ((nex.VALUE > cur.VALUE) ? -1 : 0));

export const typesEquip = <IViewValue[]>[
  {VIEW: 'Desktop', VALUE: 'desktop'},
  {VIEW: 'Notebook', VALUE: 'notebook'},
  {VIEW: 'Celular', VALUE: 'celular'},
  {VIEW: 'Tablet', VALUE: 'tablet'}
];