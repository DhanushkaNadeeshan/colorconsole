import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import InfiniteScroll from "react-infinite-scroll-component";
import Header from './components/Header';


function BoxButton(props) {

  return (
    <Link href={`/pokemon/${props.name}?id=${props.id}`}>
      <button>{props.name}</button>
    </Link>)

}

function RowComponet(props) {

  let data = props.data;

  return (
    <div className={styles.box} >
      <div className={styles.inner}>
        <img className={styles.img} src={`../pokemon/${data.name.english.toLowerCase().replace(" ", "-")}.jpg`} />
        <BoxButton name={data.name.english} id={data.id}/>
      </div>
    </div>
  )
}

class Feed extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      hasMore: true,
      moreItemsLoading: false,
      isLoad: false,
    }
    this.loadMore = this.loadMore.bind(this);
  }

  componentDidMount() {
    fetch('api/loaditems?i=0')
      .then(res => res.json())
      .then(({ data, hasNextPage }) => this.setState({ items: [...data], isLoad: true, hasNextPage: hasNextPage }));

  }

  loadMore() {

    fetch(`api/loaditems?i=${this.state.items.length}`)
      .then(res => res.json())
      .then(({ data, hasNextPage }) => this.setState({
        items: [...this.state.items, ...data],
        hasMore: hasNextPage
      }));

  }

  render() {

    const { items, hasMore } = this.state;

    if (this.state.isLoad) {
      return (

        <InfiniteScroll
          dataLength={items.length}
          next={this.loadMore}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className={styles.feed}>
            {this.state.items.map((data, index) => (
              <div key={index}>
                <RowComponet data={data} />
              </div>
            ))}
          </div>
        </InfiniteScroll>

      )

    } else {
      return <div>Loading....</div>
    }
  }



}

function SearchBar(props) {
  return (<input placeholder="Search" onChange={props.search} />)
}

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />

        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.col1}>

            </div>
            <div className={styles.col8}>
              <Feed />
            </div>
            <div className={styles.col1}></div>
          </div>
        </div>



      </div>

    )
  }


}