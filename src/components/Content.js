import React from 'react'
import { connect } from 'react-redux'
import { getData, likeMovie, blockMovie } from '../actions'
import { Component } from 'react'
import ReactLoading from 'react-loading'
import styled from 'styled-components'
import { currentMovieList,likeListId } from '../selectors';

const LoadingAnimation = ({ type, color }) => (
  <ReactLoading type={"spinningBubbles"} color={'skyblue'} height={667} width={375} />
);

const MovieContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding-left:10px;
    padding-right:10px;
    padding-top:150px;
`

const FlexCenter = styled.div`
    display:flex;
    justify-content:center;
`

const ButtonLike = styled.button`
    color:white;
    background-color:#C36C47;
    font-size:14px;
    padding:4px;
    margin:4px;
    border:none;
    border-radius:3px;
    box-shadow: 3px 3px 3px grey;
    margin:5px;
    cursor: pointer;
`

const ButtonDislike = styled.button`
    color:white;
    background-color:lightgrey;
    font-size:14px;
    padding:4px;
    margin:4px;
    border:none;
    border-radius:3px;
    box-shadow:3px 3px 3px grey;
    margin:5px;
    cursor: pointer;
`

const FontSize = styled.div`
    font-size:12px;
    font-family:"Comic Sans MS";
    line-height:1.5;
`
const Paddingfortitle = styled.div`
    padding-top:10px;
    padding-bottom:10px;
    font-size:14px;
`

class Content extends Component {
  constructor(props) {
    super(props)

  }
  componentDidMount() {
    this.props.getData()
  }
  render() {
    const {
      loading,
      currentMovieList,
      likeMovie,
      blockMovie,
      likeListId
    } = this.props
    console.log('props', this.props)
    return (
      <React.Fragment>

        <MovieContainer>
          {loading && <LoadingAnimation />}
          {currentMovieList && currentMovieList.map((item) =>
            <div key={item.id}>
              <FlexCenter>
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  style={{
                    maxWidth: '250px',
                    maxHeight: '380px',
                    padding: '10px'
                  }}
                />
              </FlexCenter>
              <FlexCenter>
                <ButtonLike
                  onClick={() => { likeMovie(item) }}
                >Like</ButtonLike>
                <ButtonDislike
                  onClick={() => { blockMovie(item) }}
                >Block</ButtonDislike>
              </FlexCenter>
              <FlexCenter>

                <FontSize>
                  <Paddingfortitle>
                  {(likeListId.indexOf(item.id)!==-1)
                    ?<img
                      src={require('../img/like.png')}
                      style={{
                        height: '16px',
                        width: 'auto'
                      }}
                    />
                    :<img
                      src={require('../img/dislike.png')}
                      style={{
                        height: '16px',
                        width: 'auto'
                      }}
                    />}
                    <span>{item.title}</span>
                  </Paddingfortitle>
                </FontSize>
              </FlexCenter>
              <FlexCenter>
                <FontSize>
                  {`Release Date:${item.release_date}`}
                </FontSize>
              </FlexCenter>
              <FlexCenter>
                <FontSize>
                  {`Vote Count:${item.vote_count}|Average Score:${item.vote_average}`}
                </FontSize>
              </FlexCenter>
              <FontSize style={{
                textAlign: 'justify'
              }}>
                {item.overview}
              </FontSize>
            </div>
          )}
        </MovieContainer>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state, props) => {
 
  return {
    movielist: state.fetchData.movielist,
    currentMovieList: currentMovieList(state, props),
    loading: state.fetchData.loading,
    likeListId:likeListId(state)
  }
}

const mapDispatchToProps = (dispatch) => ({
  getData() { dispatch(getData) },
  likeMovie(payload) { dispatch(likeMovie(payload)) },
  blockMovie(payload) { dispatch(blockMovie(payload)) }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content)