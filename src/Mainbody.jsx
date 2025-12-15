
import { useState, useRef, useEffect } from "react";
import { categories } from "./conversionData";
import ConverterBlock from "./Coderef";
import { FiSearch } from "react-icons/fi";

const Body = ({ dark }) => {
  const [open, setOpen] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [favourites, setFavourites] = useState([]);

  const iconRefs = useRef({});
  const [blockHeight, setBlockHeight] = useState(0);
  const blockRef = useRef(null);

  useEffect(() => {
    if (blockRef.current) {
      setBlockHeight(blockRef.current.offsetHeight);
    }
  }, [open]);




  const allConverters = categories.flatMap((category) =>
    category.converters.map((converter, index) => ({
      ...converter,
      categoryId: category.id,
      index,
    }))
  );

  const searchResults = searchTerm
    ? allConverters.filter((c) => {
      const term = searchTerm.toLowerCase();
      const names = [
        c.name,
        ...(c.units?.map((u) => u.name) || []),
        ...(c.units?.map((u) => u.short) || []),
      ];
      return names.some((n) => n.toLowerCase().includes(term));
    })
    : [];

  const handleDropdownClick = (converter) => {
    setSearchTerm("");
    const columns = 4;
    const rowIndex = Math.floor(converter.index / columns);
    const colIndex = converter.index % columns;

    setOpen({
      categoryId: converter.categoryId,
      rowIndex,
      converterId: converter.id,
      colIndex,
    });



    const ref = iconRefs.current[converter.id];
    if (ref) {
      const yOffset = -120;
      const y =
        ref.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  const toggleFavourite = (converter) => {
    setFavourites((prev) => {
      const exists = prev.some((c) => c.id === converter.id);
      if (exists) {
        return prev.filter((c) => c.id !== converter.id);
      }
      return [...prev, converter];
    });
  };



  return (
    <div className="mt-10 px-5 md:px-0 md:w-4/5 mx-auto">

      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6">
          <span className="text-blue-500">Quick</span>
          <span>Convert</span>
        </h1>
        <p className="text-lg md:text-xl opacity-60">
          Convert units and calculate values instantly with our powerful converters.
        </p>
      </div>


      <div className="relative mb-12 w-[95%]  md:w-3/4 mx-auto relative">
        <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          placeholder="Search for converters or units"
          className={`pl-10 placeholder-gray-500 ${dark? "border-gray-600 placeholder-gray-500": "border-gray-300 placeholder-gray-200"} w-full p-3 rounded-full border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {searchResults.length > 0 && (
          <div className={`absolute z-50 mt-2 w-full ${dark ? "bg-gray-800 border-gray-500" : "bg-gray-200 border-gray-500"} border   rounded-lg shadow-lg max-h-64 overflow-auto`}>
            {searchResults.map((c) => (
              <div
                key={c.id}
                className={`px-4 py-2 border-b-[1px]  cursor-pointer ${dark ? "border-gray-700 hover:bg-gray-600" : "border-gray-300 hover:bg-blue-500/60"} `}
                onClick={() => handleDropdownClick(c)}
              >
                {c.name} {c.units?.map((u) => `(${u.short})`).join(" ")}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mb-12">
        <h2 className="text-2xl pl-2 md:text-3xl font-semibold mb-8">
          Favourites
        </h2>

        {favourites.length === 0 ? (
          <div className="text-center opacity-60 py-2">
            You haven’t added any favourites yet
          </div>
        ) : (
          <div
            className="
        grid gap-5 md:gap-8 mx-auto w-[95%]
        grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8
      "
          >





            {favourites.map((converter, index) => {
              const Icon = converter.icon;
              const columns = 4;
              const rowIndex = Math.floor(index / columns);
              const colIndex = index % columns;

              const isOpen =
                open &&
                open.categoryId === "favourites" &&
                open.rowIndex === rowIndex &&
                open.converterId === converter.id;

              return (
                <div key={converter.id}>

                  <div
                    ref={(el) => (iconRefs.current[converter.id] = el)}
                    onClick={() =>
                      setOpen(
                        isOpen
                          ? null
                          : {
                            categoryId: "favourites",
                            rowIndex,
                            converterId: converter.id,
                            colIndex,
                          }
                      )
                    }
                    className="flex flex-col flex-shrink-0 items-center cursor-pointer"
                  >
                    <div
                      className={`flex items-center flex-shrink-0 justify-center 
            w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 
            rounded-lg md:rounded-xl transition duration-300 
            ${dark
                          ? isOpen
                            ? "border bg-gray-800 translate-y-[2px]"
                            : "bg-gray-700 text-white hover:translate-y-[2px]"
                          : isOpen
                            ? "bg-gray-100 border-blue-500/30 shadow-[0_2px_8px_rgba(41,92,173,0.3)] border translate-y-[2px]"
                            : "bg-gray-200 text-black border border-blue-500/15 shadow-[0_2px_8px_rgba(41,92,173,0.15)] hover:translate-y-[2px] hover:shadow-none"
                        }`}
                    >
                      <Icon
                        className={`text-2xl md:text-3xl ${dark ? "text-white" : "text-gray-700"
                          }`}
                      />
                    </div>
                    <span className="text-xs mt-2 break-words text-center">
                      {converter.name.split(" ")[0]}
                    </span>
                  </div>


                  {isOpen && (
                    <>

                      <div className="absolute left-0 w-full flex justify-center mt-4">

                        <div
                          className="absolute -top-2"
                          style={{
                            left: `calc(${colIndex} * (100% / ${columns}) + (100% / ${columns}) / 2 - 6px)`,
                          }}
                        >
                          <div className="md:hidden w-0 h-0 border-l-6 border-r-6 border-b-8 border-l-transparent border-r-transparent border-b-blue-500"></div>
                        </div>


                        <div ref={blockRef} className="w-full p-4 rounded-lg">
                          <ConverterBlock
                            dark={dark}
                            converter={converter}
                            categoryId="favourites"
                            isFavourite={true}
                            onToggleFavourite={() => toggleFavourite(converter)}
                            onClose={() => setOpen(false)}
                          />
                        </div>
                      </div>


                      <div style={{ height: blockHeight }} className="w-full"></div>
                    </>
                  )}

                </div>
              );
            })}


          </div>
        )}
      </div>


      {categories.map((category) => {
        const columns = 4;

        return (
          <div key={category.id} className="mb-12">
            <h2 className="text-2xl pl-2 md:text-3xl font-semibold mb-8">{category.name}</h2>


            <div
              className="
                grid gap-5 md:gap-8 mx-auto w-[95%]
                grid-cols-4
                sm:grid-cols-5
                md:grid-cols-6
                lg:grid-cols-8
              "
            >
              {category.converters.map((converter, index) => {
                const Icon = converter.icon;
                const rowIndex = Math.floor(index / columns);
                const colIndex = index % columns;

                const isOpen =
                  open &&
                  open.categoryId === category.id &&
                  open.rowIndex === rowIndex &&
                  open.converterId === converter.id;

                return (
                  <div key={converter.id}>

                    <div
                      ref={(el) => (iconRefs.current[converter.id] = el)}
                      onClick={() =>
                        setOpen(
                          isOpen
                            ? null
                            : { categoryId: category.id, rowIndex, converterId: converter.id, colIndex }
                        )
                      }
                      className="flex flex-col flex-shrink-0 items-center cursor-pointer"
                    >
                      <div
                        className={`flex items-center flex-shrink-0 justify-center 
                          w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 
                          rounded-lg md:rounded-xl transition duration-300 
                          ${dark
                            ? isOpen ? "border bg-gray-800 translate-y-[2px]" : "bg-gray-700 text-white hover:translate-y-[2px]"
                            : isOpen ? "bg-gray-100 border-blue-500/30 shadow-[0_2px_8px_rgba(41,92,173,0.3)] border translate-y-[2px]" : "bg-gray-200 text-black border border-blue-500/15 shadow-[0_2px_8px_rgba(41,92,173,0.15)] hover:translate-y-[2px] hover:shadow-none"
                          }`}
                      >
                        <Icon
                          className={`text-2xl md:text-3xl ${dark ? "text-white" : "text-gray-700"}`}
                        />
                      </div>
                      <span className="text-xs mt-2 break-words text-center">{converter.name.split(" ")[0]}</span>
                    </div>


                    {isOpen && (
                      <>
                        <div className="absolute left-0 w-full flex justify-center mt-4">

                          <div
                            className="absolute -top-2"
                            style={{
                              left: `calc(${colIndex} * (100% / ${columns}) + (100% / ${columns}) / 2 - 6px)`,
                            }}
                          >
                            <div className="w-0 h-0 border-l-6 border-r-6 md:hidden border-b-8 border-l-transparent border-r-transparent border-b-blue-500"></div>
                          </div>


                          <div ref={blockRef} className="w-full p-4 rounded-lg">
                            <ConverterBlock
                              dark={dark}
                              converter={converter}
                              categoryId={category.id}
                              isFavourite={favourites.some((f) => f.id === converter.id)}
                              onToggleFavourite={() => toggleFavourite(converter)}
                              onClose={() => setOpen(false)}
                            />
                          </div>
                        </div>


                        <div style={{ height: blockHeight }} className="w-full"></div>
                      </>
                    )}



                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Body;
