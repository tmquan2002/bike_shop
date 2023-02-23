/* eslint-disable no-useless-escape */
/* eslint-disable import/prefer-default-export */
export const deburr = (s: string): string => {
  let result = s ?? '';
  result = result.toLowerCase();
  result = result.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  result = result.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  result = result.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  result = result.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  result = result.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  result = result.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  result = result.replace(/đ/g, 'd');
  result = result.replace(
    /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
    ' ',
  );
  result = result.replace(/ + /g, ' ');
  result = result.trim();
  return result;
};

export const filterArray = <T>(arr: T[], searchValue: string): T[] => {
  const result = arr.filter((e) =>
    deburr(JSON.stringify(e))
      .toLowerCase()
      .includes(deburr(searchValue.toLowerCase().trim())),
  );

  return result;
};

export const toVND = (amount: number): string =>
  `${amount.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')} ₫`;

export const toSlug = (content: string): string => {
  let result = deburr(content) ?? '';
  result = result.replace(/[^a-z0-9 -]/g, '');
  result = result.replace(/\s+/g, '-');
  result = result.replace(/-+/g, '-');
  return result;
};

export const usaStateConverter = (s: string): string => {
  let result = s;
  switch (result) {
    case "AL": return "Alabama";
    case "AK": return "Alaska";
    case "AZ": return "Arizona";
    case "AR": return "Arkansas";
    case "CA": return "California";
    case "CZ": return "Canal Zone";
    case "CO": return "Colorado";
    case "CT": return "Connecticut";
    case "DE": return "Delaware";
    case "DC": return "District of Columbia";
    case "FL": return "Florida";
    case "GA": return "Georgia";
    case "GU": return "Guam";
    case "HI": return "Hawaii";
    case "ID": return "Idaho";
    case "IL": return "Illinois";
    case "IN": return "Indiana";
    case "IA": return "Iowa";
    case "KS": return "Kansas";
    case "KY": return "Kentucky";
    case "LA": return "Louisiana";
    case "ME": return "Maine";
    case "MD": return "Maryland";
    case "MA": return "Massachusetts";
    case "MI": return "Michigan";
    case "MN": return "Minnesota";
    case "MS": return "Mississippi";
    case "MO": return "Missouri";
    case "MT": return "Montana";
    case "NE": return "Nebraska";
    case "NV": return "Nevada";
    case "NH": return "New Hampshire";
    case "NJ": return "New Jersey";
    case "NM": return "New Mexico";
    case "NY": return "New York";
    case "NC": return "North Carolina";
    case "ND": return "North Dakota";
    case "OH": return "Ohio";
    case "OK": return "Oklahoma";
    case "OR": return "Oregon";
    case "PA": return "Pennsylvania";
    case "PR": return "Puerto Rico";
    case "RI": return "Rhode Island";
    case "SC": return "South Carolina";
    case "SD": return "South Dakota";
    case "TN": return "Tennessee";
    case "TX": return "Texas";
    case "UT": return "Utah";
    case "VT": return "Vermont";
    case "VI": return "Virgin Islands";
    case "VA": return "Virginia";
    case "WA": return "Washington";
    case "WV": return "West Virginia";
    case "WI": return "Wisconsin";
    case "WY": return "Wyoming";
    default: return "";
  }
}
