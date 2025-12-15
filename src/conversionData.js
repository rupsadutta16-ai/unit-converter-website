import {
  FaRuler, FaWeight, FaDraftingCompass, FaTint, FaThermometerHalf, FaTachometerAlt, FaStopwatch, FaGasPump,
  FaCompass, FaBolt, FaBatteryFull, FaHandRock, FaBalanceScale, FaWrench, FaFireAlt, FaTemperatureHigh, FaRunning, FaSyncAlt, FaCog, FaSave, FaCss3Alt, FaFont, FaDesktop, FaPalette,
  FaMoneyBillWave, FaChartLine, FaUniversity, FaPercentage,
  FaUtensils, FaMedal, FaLightbulb, FaVolumeUp, FaTshirt, FaGem, FaThLarge

} from "react-icons/fa";
import { FiSquare } from "react-icons/fi";

export const categories = [
  {
    id: "common",
    name: "Common Converters",
    converters: [
      {
        id: "length",
        name: "Length",
        icon: FaRuler,
        units: [
          { name: "Kilometer", short: "km" },
          { name: "Meter", short: "m" },
          { name: "Centimeter", short: "cm" },
          { name: "Millimeter", short: "mm" },
          { name: "Mile", short: "mi" },
          { name: "Foot", short: "ft" },
          { name: "Inch", short: "in" },
          { name: "Yard", short: "yd" },
          { name: "Nanometer", short: "nm" },
          { name: "Micrometer", short: "µm" },
          { name: "Picometer", short: "pm" },
          { name: "Angstrom", short: "Å" },
          { name: "Light Year", short: "ly" },

        ]
      },
      {
        id: "weight",
        name: "Weight & Mass",
        icon: FaWeight,
        units: [
          { name: "Kilogram", short: "kg" },
          { name: "Gram", short: "g" },
          { name: "Milligram", short: "mg" },
          { name: "Decagram", short: "dag" },
          { name: "Centigram", short: "cg" },
          { name: "Pound", short: "lb" },
          { name: "Ounce", short: "oz" },
          { name: "Ton", short: "t" }
        ]
      },
      {
        id: "area",
        name: "Area",
        icon: FaThLarge,
        units: [
          { name: "Square Meter", short: "m²" },
          { name: "Square Kilometer", short: "km²" },
          { name: "Square Centimeter", short: "cm²" },
          { name: "Square Millimeter", short: "mm²" },
          { name: "Hectare", short: "ha" },
          { name: "Square Foot", short: "ft²" },
          { name: "Square Yard", short: "yd²" },
          { name: "Acre", short: "ac" }
        ]
      },
      {
        id: "volume",
        name: "Volume",
        icon: FaTint,
        units: [
          { name: "Kiloliter", short: "kl" },
          { name: "Liter", short: "L" },
          { name: "Milliliter", short: "ml" },
          { name: "Cubic Meter", short: "m³" },
          { name: "Cubic Centimeter", short: "cm³" },
          { name: "Cubic Millimeter", short: "mm³" },
          { name: "Gallon", short: "gal" },
          { name: "Quart", short: "qt" },
          { name: "Pint", short: "pt" },
          { name: "Cup", short: "cup" },
          { name: "Ounce", short: "oz" }
        ]
      },
      {
        id: "temperature",
        name: "Temperature",
        icon: FaThermometerHalf,
        units: [
          { name: "Celsius", short: "°C" },
          { name: "Fahrenheit", short: "°F" },
          { name: "Kelvin", short: "K" }
        ]
      },
      {
        id: "speed",
        name: "Speed",
        icon: FaTachometerAlt,
        units: [
          { name: "Meters per Second", short: "m/s" },
          { name: "Kilometers per Hour", short: "km/h" },
          { name: "Miles per Hour", short: "mph" },
          { name: "Feet per Second", short: "ft/s" },
          { name: "Knot", short: "kn" }
        ]
      },
      {
        id: "time",
        name: "Time",
        icon: FaStopwatch,
        units: [
          { name: "Millisecond", short: "ms" },
          { name: "Second", short: "s" },
          { name: "Minute", short: "min" },
          { name: "Hour", short: "h" },
          { name: "Day", short: "d" },
          { name: "Week", short: "wk" },
          { name: "Month", short: "mo" },
          { name: "Year", short: "yr" },
          { name: "Decade", short: "dec" },
          { name: "Century", short: "c" }
        ]
      },
      {
        id: "angle",
        name: "Angle",
        icon: FaDraftingCompass,
        units: [
          { name: "Degree", short: "°" },
          { name: "Radian", short: "rad" },
          { name: "Gradian", short: "grad" }
        ]
      },
      {
        id: "fuel",
        name: "Fuel Consumption",
        icon: FaGasPump,
        units: [
          { name: "Liters per 100 Kilometers", short: "L/100km" },
          { name: "Miles per Gallon (US)", short: "mpg (US)" },
          { name: "Miles per Gallon (UK)", short: "mpg (UK)" },
          { name: "Kilometers per Liter", short: "km/L" }
        ]
      }
    ]
  },
  {
    id: "engineering",
    name: "Engineering",
    converters: [
      {
        id: "pressure",
        name: "Pressure Converter",
        icon: FaCompass,
        units: [
          { name: "Pascal", short: "Pa" },
          { name: "Kilopascal", short: "kPa" },
          { name: "Bar", short: "bar" },
          { name: "Atmosphere", short: "atm" },
          { name: "Pounds per Square Inch", short: "psi" },
          { name: "Millimeter of Mercury", short: "mmHg" },
          { name: "Torr", short: "Torr" }
        ]
      },
      {
        id: "energy",
        name: "Energy",
        icon: FaBolt,
        units: [
          { name: "Joule", short: "J" },
          { name: "Kilojoule", short: "kJ" },
          { name: "Calorie", short: "cal" },
          { name: "Kilocalorie", short: "kcal" },
          { name: "Watt-hour", short: "Wh" },
          { name: "Kilowatt-hour", short: "kWh" },
          { name: "British Thermal Unit", short: "BTU" }
        ]
      },
      {
        id: "power",
        name: "Power",
        icon: FaBatteryFull,
        units: [
          { name: "Watt", short: "W" },
          { name: "Kilowatt", short: "kW" },
          { name: "Megawatt", short: "MW" },
          { name: "Horsepower", short: "hp" }
        ]
      },
      {
        id: "force",
        name: "Force",
        icon: FaHandRock,
        units: [
          { name: "Newton", short: "N" },
          { name: "Kilonewton", short: "kN" },
          { name: "Pound-force", short: "lbf" },
          { name: "Dyne", short: "dyn" }
        ]
      },
      {
        id: "density",
        name: "Density",
        icon: FaBalanceScale,
        units: [
          { name: "Kilogram per Cubic Meter", short: "kg/m³" },
          { name: "Gram per Cubic Centimeter", short: "g/cm³" },
          { name: "Pound per Cubic Foot", short: "lb/ft³" }
        ]
      },
      {
        id: "torque",
        name: "Torque",
        icon: FaWrench,
        units: [
          { name: "Newton Meter", short: "N·m" },
          { name: "Kilogram Meter", short: "kg·m" },
          { name: "Pound Foot", short: "lb·ft" }
        ]
      },
      {
        id: "flow",
        name: "Flow",
        icon: FaTint,
        units: [
          { name: "Cubic Meter per Second", short: "m³/s" },
          { name: "Liter per Second", short: "L/s" },
          { name: "Liter per Minute", short: "L/min" },
          { name: "Gallon per Minute", short: "gal/min" },
          { name: "Cubic Foot per Second", short: "ft³/s" }
        ]
      },
      {
        id: "viscosity",
        name: "Viscosity",
        icon: FaFireAlt,
        units: [
          { name: "Pascal-second", short: "Pa·s" },
          { name: "Centipoise", short: "cP" },
          { name: "Poise", short: "P" }
        ]
      },
      {
        id: "thermalConductivity",
        name: "Conductivity",
        icon: FaTemperatureHigh,
        units: [
          { name: "Watt per Meter-Kelvin", short: "W/(m·K)" },
          { name: "Kilocalorie per Meter-Hour-Degree Celsius", short: "kcal/(m·h·°C)" },
          { name: "BTU per Hour-Foot-Degree Fahrenheit", short: "BTU/(h·ft·°F)" }
        ]
      },
      {
        id: "specificHeat",
        name: "Specific Heat",
        icon: FaTemperatureHigh,
        units: [
          { name: "Joule per Kilogram-Kelvin", short: "J/(kg·K)" },
          { name: "Kilojoule per Kilogram-Kelvin", short: "kJ/(kg·K)" },
          { name: "Calorie per Gram-Degree Celsius", short: "cal/(g·°C)" }
        ]
      },
      {
        id: "heatTransfer",
        name: "Heat Transfer",
        icon: FaTemperatureHigh,
        units: [
          { name: "Watt per Square Meter-Kelvin", short: "W/(m²·K)" },
          { name: "BTU per Hour-Foot²-Degree Fahrenheit", short: "BTU/(h·ft²·°F)" }
        ]
      },
      {
        id: "acceleration",
        name: "Acceleration",
        icon: FaRunning,
        units: [
          { name: "Meters per Second Squared", short: "m/s²" },
          { name: "Feet per Second Squared", short: "ft/s²" },
          { name: "g-force", short: "g" }
        ]
      },
      {
        id: "angularVelocity",
        name: "Angular Velocity",
        icon: FaSyncAlt,
        units: [
          { name: "Radian per Second", short: "rad/s" },
          { name: "Degree per Second", short: "°/s" },
          { name: "Revolution per Minute", short: "rpm" }
        ]
      },
      {
        id: "momentOfInertia",
        name: "Moment of Inertia",
        icon: FaCog,
        units: [
          { name: "Kilogram Meter Squared", short: "kg·m²" },
          { name: "Gram Centimeter Squared", short: "g·cm²" },
          { name: "Pound Foot Squared", short: "lb·ft²" }
        ]
      },
      {
        id: "illumination",
        name: "Illumination",
        icon: FaLightbulb,
        units: [
          { name: "Lux", short: "lx" },
          { name: "Meter-candle", short: "m*c" },
          { name: "Centimeter-candle", short: "cm*c" },
          { name: "Foot-candle", short: "ft*c" },
          { name: "Flame", short: "flame" },
          { name: "Phot", short: "ph" },
          { name: "Nox", short: "nox" },
          { name: "Candela Steradian per Square Meter", short: "cd·sr/m²" },
          { name: "Lumen per Square Meter", short: "lm/m²" },
          { name: "Lumen per Square Centimeter", short: "lm/cm²" },
          { name: "Lumen per Square Foot", short: "lm/ft²" },
          { name: "Watt per Square Centimeter (at 555 nm)", short: "W/cm²-555nm" }
        ]
      },

      {
        id: "sound",
        name: "Sound",
        icon: FaVolumeUp,
        units: [
          { name: "Decibel", short: "dB" },
          { name: "Bel", short: "B" },
          { name: "Neper", short: "Np" }
        ]
      }
    ]
  },
  {
    id: "digital",
    name: "Developer / Digital",
    converters: [
      {
        id: "data-storage",
        name: "Data Storage",
        icon: FaSave,
        units: [
          { name: "Bit", short: "bit" },
          { name: "Byte", short: "B" },
          { name: "Kilobyte", short: "KB" },
          { name: "Megabyte", short: "MB" },
          { name: "Gigabyte", short: "GB" },
          { name: "Terabyte", short: "TB" }
        ]
      },
      {
        id: "css-units",
        name: "CSS Units",
        icon: FaCss3Alt,
        units: [
          { name: "Pixel", short: "px" },
          { name: "Em", short: "em" },
          { name: "Rem", short: "rem" },
          { name: "Viewport Width", short: "vw" },
          { name: "Viewport Height", short: "vh" },
          { name: "Percentage", short: "%" }
        ],
        customLogic: "css"
      },
      {
        id: "font-sizes",
        name: "Font Sizes",
        icon: FaFont,
        units: [
          { name: "Pixel", short: "px" },
          { name: "Point", short: "pt" },
          { name: "Pica", short: "pc" },
          { name: "Centimeter", short: "cm" },
          { name: "Millimeter", short: "mm" },
        ]
      },
      {
        id: "screen-density",
        name: "Screen / Display",
        icon: FaDesktop,
        units: [
          { name: "Pixel per Inch", short: "PPI" },
          { name: "Dot per Inch", short: "DPI" },
          { name: "Dot per Centimeter", short: "DPCM" }
        ]
      }

      // {
      //   id: "color",
      //   name: "Colour",
      //   icon: FaPalette,
      //   units: [
      //     { name: "HEX", short: "HEX" },
      //     { name: "RGB", short: "RGB" },

      //     { name: "HSL", short: "HSL" },

      //   ],
      //   customLogic: "color"
      // }
    ]
  },
  {
    id: "finance",
    name: "Finance / Currency",
    converters: [
      {
        id: "currency",
        name: "Currency",
        icon: FaMoneyBillWave,
        units: [
          { name: "Indian Rupee", short: "INR" },
          { name: "United States Dollar", short: "USD" },
          { name: "Euro", short: "EUR" },
          { name: "British Pound Sterling", short: "GBP" },
          { name: "Japanese Yen", short: "JPY" },
          { name: "Australian Dollar", short: "AUD" },
          { name: "Canadian Dollar", short: "CAD" },
          { name: "Swiss Franc", short: "CHF" },
          { name: "Chinese Yuan", short: "CNY" },
          { name: "Singapore Dollar", short: "SGD" },
          { name: "Hong Kong Dollar", short: "HKD" },
          { name: "New Zealand Dollar", short: "NZD" },
          { name: "South African Rand", short: "ZAR" },



        ],
        api: true,
        customLogic: "currency"
      },
      {
        id: "interest",
        name: "Interest Rate",
        icon: FaChartLine,
        units: [{ name: "Percentage", short: "%" }],
        customLogic: "interest"
      },
      {
        id: "loan-emi",
        name: "Loan / EMI",
        icon: FaUniversity,
        units: [{ name: "Percentage", short: "%" }],
        customLogic: "emi"
      },
      {
        id: "profit-loss",
        name: "Percentage / Profit & Loss",
        icon: FaPercentage,
        units: [
          { name: "Percentage", short: "%" }
        ],
        customLogic: "profitLoss"
      }
    ]
  },
  {
    id: "misc",
    name: "Miscellaneous",
    converters: [
      {
        id: "cooking",
        name: "Cooking Volume",
        icon: FaUtensils,
        units: [
          { name: "Teaspoon", short: "tsp" },
          { name: "Tablespoon", short: "tbsp" },
          { name: "Cup", short: "cup" },
          { name: "Milliliter", short: "mL" },
          { name: "Liter", short: "L" },
          { name: "Gallon", short: "gal" }
        ]
      },
      {
        id: "gold",
        name: "Gold / Precious Metals",
        icon: FaMedal,
        units: [
          { name: "Gram", short: "g" },
          { name: "Kilogram", short: "kg" },
          { name: "Milligram", short: "mg" },
          { name: "Troy Ounce", short: "ozt" },
          { name: "Carat", short: "ct" }
        ]
      },

      {
        id: "textile-weight",
        name: "Textile Weight",
        icon: FaTshirt,
        units: [
          { name: "Gram per Square Meter", short: "GSM" },
          { name: "Ounce per Square Yard", short: "oz/yd²" }
        ]
      }


    ]
  }
];