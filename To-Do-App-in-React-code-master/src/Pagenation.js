import React from "react";
import { render } from "react-dom";
import Pagination from "react-paginating";

const fruits = [
  ["7", "michael.lawson@reqres.in", "Michael","Lawson","https://reqres.in/img/faces/7-image.jpg"],
  ["8", "lindsay.ferguson@reqres.in","Lindsay","Ferguson","https://reqres.in/img/faces/8-image.jpg"],
  ["9", "tobias.funke@reqres.in","Tobias","Funke","https://reqres.in/img/faces/9-image.jpg"],
  ["10", "byron.fields@reqres.in","Byron","https://reqres.in/img/faces/10-image.jpg"],
  ["11", "george.edwards@reqres.in", "George","Edwards","https://reqres.in/img/faces/11-image.jpg"]
];
const limit = 3;
const pageCount = 2;
const total = fruits.length * limit;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1
    };
  }

  handlePageChange = (page, e) => {
    this.setState({
      currentPage: page
    });
  };

  render() {
    const { currentPage } = this.state;
    return (
      <div>
        <ul>
          {fruits[currentPage - 1].map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <Pagination
          total={total}
          limit={limit}
          pageCount={pageCount}
          currentPage={currentPage}
          className="bg-red"
        >
          {({
            pages,
            currentPage,
            hasNextPage,
            hasPreviousPage,
            previousPage,
            nextPage,
            totalPages,
            getPageItemProps
          }) => (
            <div>
              <button
                {...getPageItemProps({
                  pageValue: 1,
                  onPageChange: this.handlePageChange
                })}
              >
                first
              </button>

              {hasPreviousPage && (
                <button
                  {...getPageItemProps({
                    pageValue: previousPage,
                    onPageChange: this.handlePageChange
                  })}
                >
                  {"<"}
                </button>
              )}

              {pages.map(page => {
                let activePage = null;
                if (currentPage === page) {
                  activePage = { backgroundColor: "#fdce09" };
                }
                return (
                  <button
                    {...getPageItemProps({
                      pageValue: page,
                      key: page,
                      style: activePage,
                      onPageChange: this.handlePageChange
                    })}
                  >
                    {page}
                  </button>
                );
              })}

              {hasNextPage && (
                <button
                  {...getPageItemProps({
                    pageValue: nextPage,
                    onPageChange: this.handlePageChange
                  })}
                >
                  {">"}
                </button>
              )}

              <button
                {...getPageItemProps({
                  pageValue: totalPages,
                  onPageChange: this.handlePageChange
                })}
              >
                last
              </button>
            </div>
          )}
        </Pagination>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
