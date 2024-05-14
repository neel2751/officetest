export const MENU = [
  {
    name: "Dashboard",
    path: "/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
        />
      </svg>
    ),
  },
  {
    name: "Add Role",
    path: "/Role",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </svg>
    ),
  },
  {
    name: "Employee",
    path: "/Employe",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
        />
      </svg>
    ),
  },
  {
    name: "Project",
    path: "/SiteProject",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
        />
      </svg>
    ),
  },
  {
    name: "Shift View",
    path: "/shiftview",
    submenu: [
      { name: "View Shifts", path: "/shiftview/viewshifts" },
      { name: "Add Employee to Shift", path: "/addEmpToShift" },
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
        />
      </svg>
    ),
  },
  {
    name: "Add Employee",
    path: "/addemployee",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46"
        />
      </svg>
    ),
  },
  {
    name: "View Employee",
    path: "/employeeinfo",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
        />
      </svg>
    ),
  },
  {
    name: "Attendance",
    path: "/attendance",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6ZM7.5 6h.008v.008H7.5V6Zm2.25 0h.008v.008H9.75V6Z"
        />
      </svg>
    ),
  },
  {
    name: "Logout",
    action: () => (window.location.href = "http://localhost:3001/logout"),
    path: "/logout",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9"
        />
      </svg>
    ),
  },
];
export function getMenu(path) {
  return MENU.find((item) => item.path === path);
}

export const OPTIONS = [
  {
    id: "option1",
    label: "Option 1",
  },
  {
    id: "option2",
    label: "Option 2",
  },
];

export const COUNTRIES = [
  { code: "ad", label: "Andorra" },
  { code: "ae", label: "United Arab Emirates" },
  { code: "af", label: "Afghanistan" },
  { code: "ag", label: "Antigua and Barbuda" },
  { code: "ai", label: "Anguilla" },
  { code: "al", label: "Albania" },
  { code: "am", label: "Armenia" },
  { code: "ao", label: "Angola" },
  { code: "aq", label: "Antarctica" },
  { code: "ar", label: "Argentina" },
  { code: "as", label: "American Samoa" },
  { code: "at", label: "Austria" },
  { code: "au", label: "Australia" },
  { code: "aw", label: "Aruba" },
  { code: "ax", label: "Åland Islands" },
  { code: "az", label: "Azerbaijan" },
  { code: "ba", label: "Bosnia and Herzegovina" },
  { code: "bb", label: "Barbados" },
  { code: "bd", label: "Bangladesh" },
  { code: "be", label: "Belgium" },
  { code: "bf", label: "Burkina Faso" },
  { code: "bg", label: "Bulgaria" },
  { code: "bh", label: "Bahrain" },
  { code: "bi", label: "Burundi" },
  { code: "bj", label: "Benin" },
  { code: "bl", label: "Saint Barthélemy" },
  { code: "bm", label: "Bermuda" },
  { code: "bn", label: "Brunei" },
  { code: "bo", label: "Bolivia" },
  { code: "bq", label: "Caribbean Netherlands" },
  { code: "br", label: "Brazil" },
  { code: "bs", label: "Bahamas" },
  { code: "bt", label: "Bhutan" },
  { code: "bv", label: "Bouvet Island" },
  { code: "bw", label: "Botswana" },
  { code: "by", label: "Belarus" },
  { code: "bz", label: "Belize" },
  { code: "ca", label: "Canada" },
  { code: "cc", label: "Cocos (Keeling) Islands" },
  { code: "cd", label: "DR Congo" },
  { code: "cf", label: "Central African Republic" },
  { code: "cg", label: "Republic of the Congo" },
  { code: "ch", label: "Switzerland" },
  { code: "ci", label: "Côte d'Ivoire (Ivory Coast)" },
  { code: "ck", label: "Cook Islands" },
  { code: "cl", label: "Chile" },
  { code: "cm", label: "Cameroon" },
  { code: "cn", label: "China" },
  { code: "co", label: "Colombia" },
  { code: "cr", label: "Costa Rica" },
  { code: "cu", label: "Cuba" },
  { code: "cv", label: "Cape Verde" },
  { code: "cw", label: "Curaçao" },
  { code: "cx", label: "Christmas Island" },
  { code: "cy", label: "Cyprus" },
  { code: "cz", label: "Czechia" },
  { code: "de", label: "Germany" },
  { code: "dj", label: "Djibouti" },
  { code: "dk", label: "Denmark" },
  { code: "dm", label: "Dominica" },
  { code: "do", label: "Dominican Republic" },
  { code: "dz", label: "Algeria" },
  { code: "ec", label: "Ecuador" },
  { code: "ee", label: "Estonia" },
  { code: "eg", label: "Egypt" },
  { code: "eh", label: "Western Sahara" },
  { code: "er", label: "Eritrea" },
  { code: "es", label: "Spain" },
  { code: "et", label: "Ethiopia" },
  { code: "eu", label: "European Union" },
  { code: "fi", label: "Finland" },
  { code: "fj", label: "Fiji" },
  { code: "fk", label: "Falkland Islands" },
  { code: "fm", label: "Micronesia" },
  { code: "fo", label: "Faroe Islands" },
  { code: "fr", label: "France" },
  { code: "ga", label: "Gabon" },
  { code: "gb", label: "United Kingdom" },
  { code: "gb-eng", label: "England" },
  { code: "gb-nir", label: "Northern Ireland" },
  { code: "gb-sct", label: "Scotland" },
  { code: "gb-wls", label: "Wales" },
  { code: "gd", label: "Grenada" },
  { code: "ge", label: "Georgia" },
  { code: "gf", label: "French Guiana" },
  { code: "gg", label: "Guernsey" },
  { code: "gh", label: "Ghana" },
  { code: "gi", label: "Gibraltar" },
  { code: "gl", label: "Greenland" },
  { code: "gm", label: "Gambia" },
  { code: "gn", label: "Guinea" },
  { code: "gp", label: "Guadeloupe" },
  { code: "gq", label: "Equatorial Guinea" },
  { code: "gr", label: "Greece" },
  { code: "gs", label: "South Georgia" },
  { code: "gt", label: "Guatemala" },
  { code: "gu", label: "Guam" },
  { code: "gw", label: "Guinea-Bissau" },
  { code: "gy", label: "Guyana" },
  { code: "hk", label: "Hong Kong" },
  { code: "hm", label: "Heard Island and McDonald Islands" },
  { code: "hn", label: "Honduras" },
  { code: "hr", label: "Croatia" },
  { code: "ht", label: "Haiti" },
  { code: "hu", label: "Hungary" },
  { code: "id", label: "Indonesia" },
  { code: "ie", label: "Ireland" },
  { code: "il", label: "Israel" },
  { code: "im", label: "Isle of Man" },
  { code: "in", label: "India" },
  { code: "io", label: "British Indian Ocean Territory" },
  { code: "iq", label: "Iraq" },
  { code: "ir", label: "Iran" },
  { code: "is", label: "Iceland" },
  { code: "it", label: "Italy" },
  { code: "je", label: "Jersey" },
  { code: "jm", label: "Jamaica" },
  { code: "jo", label: "Jordan" },
  { code: "jp", label: "Japan" },
  { code: "ke", label: "Kenya" },
  { code: "kg", label: "Kyrgyzstan" },
  { code: "kh", label: "Cambodia" },
  { code: "ki", label: "Kiribati" },
  { code: "km", label: "Comoros" },
  { code: "kn", label: "Saint Kitts and Nevis" },
  { code: "kp", label: "North Korea" },
  { code: "kr", label: "South Korea" },
  { code: "kw", label: "Kuwait" },
  { code: "ky", label: "Cayman Islands" },
  { code: "kz", label: "Kazakhstan" },
  { code: "la", label: "Laos" },
  { code: "lb", label: "Lebanon" },
  { code: "lc", label: "Saint Lucia" },
  { code: "li", label: "Liechtenstein" },
  { code: "lk", label: "Sri Lanka" },
  { code: "lr", label: "Liberia" },
  { code: "ls", label: "Lesotho" },
  { code: "lt", label: "Lithuania" },
  { code: "lu", label: "Luxembourg" },
  { code: "lv", label: "Latvia" },
  { code: "ly", label: "Libya" },
  { code: "ma", label: "Morocco" },
  { code: "mc", label: "Monaco" },
  { code: "md", label: "Moldova" },
  { code: "me", label: "Montenegro" },
  { code: "mf", label: "Saint Martin" },
  { code: "mg", label: "Madagascar" },
  { code: "mh", label: "Marshall Islands" },
  { code: "mk", label: "North Macedonia" },
  { code: "ml", label: "Mali" },
  { code: "mm", label: "Myanmar" },
  { code: "mn", label: "Mongolia" },
  { code: "mo", label: "Macau" },
  { code: "mp", label: "Northern Mariana Islands" },
  { code: "mq", label: "Martinique" },
  { code: "mr", label: "Mauritania" },
  { code: "ms", label: "Montserrat" },
  { code: "mt", label: "Malta" },
  { code: "mu", label: "Mauritius" },
  { code: "mv", label: "Maldives" },
  { code: "mw", label: "Malawi" },
  { code: "mx", label: "Mexico" },
  { code: "my", label: "Malaysia" },
  { code: "mz", label: "Mozambique" },
  { code: "na", label: "Namibia" },
  { code: "nc", label: "New Caledonia" },
  { code: "ne", label: "Niger" },
  { code: "nf", label: "Norfolk Island" },
  { code: "ng", label: "Nigeria" },
  { code: "ni", label: "Nicaragua" },
  { code: "nl", label: "Netherlands" },
  { code: "no", label: "Norway" },
  { code: "np", label: "Nepal" },
  { code: "nr", label: "Nauru" },
  { code: "nu", label: "Niue" },
  { code: "nz", label: "New Zealand" },
  { code: "om", label: "Oman" },
  { code: "pa", label: "Panama" },
  { code: "pe", label: "Peru" },
  { code: "pf", label: "French Polynesia" },
  { code: "pg", label: "Papua New Guinea" },
  { code: "ph", label: "Philippines" },
  { code: "pk", label: "Pakistan" },
  { code: "pl", label: "Poland" },
  { code: "pm", label: "Saint Pierre and Miquelon" },
  { code: "pn", label: "Pitcairn Islands" },
  { code: "pr", label: "Puerto Rico" },
  { code: "ps", label: "Palestine" },
  { code: "pt", label: "Portugal" },
  { code: "pw", label: "Palau" },
  { code: "py", label: "Paraguay" },
  { code: "qa", label: "Qatar" },
  { code: "re", label: "Réunion" },
  { code: "ro", label: "Romania" },
  { code: "rs", label: "Serbia" },
  { code: "ru", label: "Russia" },
  { code: "rw", label: "Rwanda" },
  { code: "sa", label: "Saudi Arabia" },
  { code: "sb", label: "Solomon Islands" },
  { code: "sc", label: "Seychelles" },
  { code: "sd", label: "Sudan" },
  { code: "se", label: "Sweden" },
  { code: "sg", label: "Singapore" },
  { code: "sh", label: "Saint Helena, Ascension and Tristan da Cunha" },
  { code: "si", label: "Slovenia" },
  { code: "sj", label: "Svalbard and Jan Mayen" },
  { code: "sk", label: "Slovakia" },
  { code: "sl", label: "Sierra Leone" },
  { code: "sm", label: "San Marino" },
  { code: "sn", label: "Senegal" },
  { code: "so", label: "Somalia" },
  { code: "sr", label: "Suriname" },
  { code: "ss", label: "South Sudan" },
  { code: "st", label: "São Tomé and Príncipe" },
  { code: "sv", label: "El Salvador" },
  { code: "sx", label: "Sint Maarten" },
  { code: "sy", label: "Syria" },
  { code: "sz", label: "Eswatini (Swaziland)" },
  { code: "tc", label: "Turks and Caicos Islands" },
  { code: "td", label: "Chad" },
  { code: "tf", label: "French Southern and Antarctic Lands" },
  { code: "tg", label: "Togo" },
  { code: "th", label: "Thailand" },
  { code: "tj", label: "Tajikistan" },
  { code: "tk", label: "Tokelau" },
  { code: "tl", label: "Timor-Leste" },
  { code: "tm", label: "Turkmenistan" },
  { code: "tn", label: "Tunisia" },
  { code: "to", label: "Tonga" },
  { code: "tr", label: "Turkey" },
  { code: "tt", label: "Trinidad and Tobago" },
  { code: "tv", label: "Tuvalu" },
  { code: "tw", label: "Taiwan" },
  { code: "tz", label: "Tanzania" },
  { code: "ua", label: "Ukraine" },
  { code: "ug", label: "Uganda" },
  { code: "um", label: "United States Minor Outlying Islands" },
  { code: "un", label: "United Nations" },
  { code: "us", label: "United States" },
  { code: "us-ak", label: "Alaska" },
  { code: "us-al", label: "Alabama" },
  { code: "us-ar", label: "Arkansas" },
  { code: "us-az", label: "Arizona" },
  { code: "us-ca", label: "California" },
  { code: "us-co", label: "Colorado" },
  { code: "us-ct", label: "Connecticut" },
  { code: "us-de", label: "Delaware" },
  { code: "us-fl", label: "Florida" },
  { code: "us-ga", label: "Georgia" },
  { code: "us-hi", label: "Hawaii" },
  { code: "us-ia", label: "Iowa" },
  { code: "us-id", label: "Idaho" },
  { code: "us-il", label: "Illinois" },
  { code: "us-in", label: "Indiana" },
  { code: "us-ks", label: "Kansas" },
  { code: "us-ky", label: "Kentucky" },
  { code: "us-la", label: "Louisiana" },
  { code: "us-ma", label: "Massachusetts" },
  { code: "us-md", label: "Maryland" },
  { code: "us-me", label: "Maine" },
  { code: "us-mi", label: "Michigan" },
  { code: "us-mn", label: "Minnesota" },
  { code: "us-mo", label: "Missouri" },
  { code: "us-ms", label: "Mississippi" },
  { code: "us-mt", label: "Montana" },
  { code: "us-nc", label: "North Carolina" },
  { code: "us-nd", label: "North Dakota" },
  { code: "us-ne", label: "Nebraska" },
  { code: "us-nh", label: "New Hampshire" },
  { code: "us-nj", label: "New Jersey" },
  { code: "us-nm", label: "New Mexico" },
  { code: "us-nv", label: "Nevada" },
  { code: "us-ny", label: "New York" },
  { code: "us-oh", label: "Ohio" },
  { code: "us-ok", label: "Oklahoma" },
  { code: "us-or", label: "Oregon" },
  { code: "us-pa", label: "Pennsylvania" },
  { code: "us-ri", label: "Rhode Island" },
  { code: "us-sc", label: "South Carolina" },
  { code: "us-sd", label: "South Dakota" },
  { code: "us-tn", label: "Tennessee" },
  { code: "us-tx", label: "Texas" },
  { code: "us-ut", label: "Utah" },
  { code: "us-va", label: "Virginia" },
  { code: "us-vt", label: "Vermont" },
  { code: "us-wa", label: "Washington" },
  { code: "us-wi", label: "Wisconsin" },
  { code: "us-wv", label: "West Virginia" },
  { code: "us-wy", label: "Wyoming" },
  { code: "uy", label: "Uruguay" },
  { code: "uz", label: "Uzbekistan" },
  { code: "va", label: "Vatican City (Holy See)" },
  { code: "vc", label: "Saint Vincent and the Grenadines" },
  { code: "ve", label: "Venezuela" },
  { code: "vg", label: "British Virgin Islands" },
  { code: "vi", label: "United States Virgin Islands" },
  { code: "vn", label: "Vietnam" },
  { code: "vu", label: "Vanuatu" },
  { code: "wf", label: "Wallis and Futuna" },
  { code: "ws", label: "Samoa" },
  { code: "xk", label: "Kosovo" },
  { code: "ye", label: "Yemen" },
  { code: "yt", label: "Mayotte" },
  { code: "za", label: "South Africa" },
  { code: "zm", label: "Zambia" },
  { code: "zw", label: "Zimbabwe" },
];
