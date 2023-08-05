import React, { Component } from "react";
import Card from "../components/card/Card";

class List extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const movies = await fetch("./data.json");
    const moviesJson = await movies.json();

    if (moviesJson) {
      this.setState({
        data: moviesJson,
        loading: false,
      });
    }
  }

  render() {
    const { data, loading } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="row">
        {data.map((mov) => (
          <div key={mov.id} className="col-sm-2">
            <Card key={mov.id} movie={mov} />
          </div>
        ))}
        ;
      </div>
    );
  }
}

export default List;
