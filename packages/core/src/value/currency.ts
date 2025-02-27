/**
 * @packageDocumentation
 * @module Standard.Value
 */
import { ClosedCodeList, CodeList } from '@ts4ocds/utils';

/**
 * The currency of the {@link Value.amount | amount},
 * from the closed [currency](https://standard.open-contracting.org/1.1/en/schema/codelists/#currency) codelist.
 */
export const Currencies = new ClosedCodeList([
  'ADP',
  'AED',
  'AFA',
  'AFN',
  'ALK',
  'ALL',
  'AMD',
  'ANG',
  'AOA',
  'AOK',
  'AON',
  'AOR',
  'ARA',
  'ARP',
  'ARS',
  'ARY',
  'ATS',
  'AUD',
  'AWG',
  'AYM',
  'AZM',
  'AZN',
  'BAD',
  'BAM',
  'BBD',
  'BDT',
  'BEC',
  'BEF',
  'BEL',
  'BGJ',
  'BGK',
  'BGL',
  'BGN',
  'BHD',
  'BIF',
  'BMD',
  'BND',
  'BOB',
  'BOP',
  'BOV',
  'BRB',
  'BRC',
  'BRE',
  'BRL',
  'BRN',
  'BRR',
  'BSD',
  'BTN',
  'BUK',
  'BWP',
  'BYB',
  'BYN',
  'BYR',
  'BZD',
  'CAD',
  'CDF',
  'CHC',
  'CHE',
  'CHF',
  'CHW',
  'CLF',
  'CLP',
  'CNY',
  'COP',
  'COU',
  'CRC',
  'CSD',
  'CSJ',
  'CSK',
  'CUC',
  'CUP',
  'CVE',
  'CYP',
  'CZK',
  'DDM',
  'DEM',
  'DJF',
  'DKK',
  'DOP',
  'DZD',
  'ECS',
  'ECV',
  'EEK',
  'EGP',
  'ERN',
  'ESA',
  'ESB',
  'ESP',
  'ETB',
  'EUR',
  'FIM',
  'FJD',
  'FKP',
  'FRF',
  'GBP',
  'GEK',
  'GEL',
  'GHC',
  'GHP',
  'GHS',
  'GIP',
  'GMD',
  'GNE',
  'GNF',
  'GNS',
  'GQE',
  'GRD',
  'GTQ',
  'GWE',
  'GWP',
  'GYD',
  'HKD',
  'HNL',
  'HRD',
  'HRK',
  'HTG',
  'HUF',
  'IDR',
  'IEP',
  'ILP',
  'ILR',
  'ILS',
  'INR',
  'IQD',
  'IRR',
  'ISJ',
  'ISK',
  'ITL',
  'JMD',
  'JOD',
  'JPY',
  'KES',
  'KGS',
  'KHR',
  'KMF',
  'KPW',
  'KRW',
  'KWD',
  'KYD',
  'KZT',
  'LAJ',
  'LAK',
  'LBP',
  'LKR',
  'LRD',
  'LSL',
  'LSM',
  'LTL',
  'LTT',
  'LUC',
  'LUF',
  'LUL',
  'LVL',
  'LVR',
  'LYD',
  'MAD',
  'MDL',
  'MGA',
  'MGF',
  'MKD',
  'MLF',
  'MMK',
  'MNT',
  'MOP',
  'MRO',
  'MRU',
  'MTL',
  'MTP',
  'MUR',
  'MVQ',
  'MVR',
  'MWK',
  'MXN',
  'MXP',
  'MXV',
  'MYR',
  'MZE',
  'MZM',
  'MZN',
  'NAD',
  'NGN',
  'NIC',
  'NIO',
  'NLG',
  'NOK',
  'NPR',
  'NZD',
  'OMR',
  'PAB',
  'PEH',
  'PEI',
  'PEN',
  'PES',
  'PGK',
  'PHP',
  'PKR',
  'PLN',
  'PLZ',
  'PTE',
  'PYG',
  'QAR',
  'RHD',
  'ROK',
  'ROL',
  'RON',
  'RSD',
  'RUB',
  'RUR',
  'RWF',
  'SAR',
  'SBD',
  'SCR',
  'SDD',
  'SDG',
  'SDP',
  'SEK',
  'SGD',
  'SHP',
  'SIT',
  'SKK',
  'SLL',
  'SOS',
  'SRD',
  'SRG',
  'SSP',
  'STD',
  'STN',
  'SUR',
  'SVC',
  'SYP',
  'SZL',
  'THB',
  'TJR',
  'TJS',
  'TMM',
  'TMT',
  'TND',
  'TOP',
  'TPE',
  'TRL',
  'TRY',
  'TTD',
  'TWD',
  'TZS',
  'UAH',
  'UAK',
  'UGS',
  'UGW',
  'UGX',
  'USD',
  'USN',
  'USS',
  'UYI',
  'UYN',
  'UYP',
  'UYU',
  'UYW',
  'UZS',
  'VEB',
  'VEF',
  'VES',
  'VNC',
  'VND',
  'VUV',
  'WST',
  'XAF',
  'XAG',
  'XAU',
  'XBA',
  'XBB',
  'XBC',
  'XBD',
  'XCD',
  'XDR',
  'XEU',
  'XFO',
  'XFU',
  'XOF',
  'XPD',
  'XPF',
  'XPT',
  'XRE',
  'XSU',
  'XTS',
  'XUA',
  'XXX',
  'YDD',
  'YER',
  'YUD',
  'YUM',
  'YUN',
  'ZAL',
  'ZAR',
  'ZMK',
  'ZMW',
  'ZRN',
  'ZRZ',
  'ZWC',
  'ZWD',
  'ZWL',
  'ZWN',
  'ZWR',
]);

/**
 * The currency of the {@link Value.amount | amount},
 * from the closed [currency](https://standard.open-contracting.org/1.1/en/schema/codelists/#currency) codelist.
 */
export type Currency = CodeList<typeof Currencies>;
