/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import pet from '@frontendmasters/pet';
import { navigate } from '@reach/router';
import Carousel from './Carousel';
import ErrorBoundary from './ErrorBoundary';
import ThemeContext from './ThemeContext';
import Modal from './Modal';

class Details extends Component {
  state = {
    loading: true,
    showModal: false
  };

  componentDidMount() {
    // throw new Error('lol');

    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        url: animal.url,
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city},
          ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false
      });
    }, console.error);
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal });

  adopt = () => navigate(this.state.url);

  render() {
    const {
      animal,
      breed,
      location,
      description,
      name,
      media,
      showModal,
      loading
    } = this.state;

    if (loading) {
      return <h1>Loading...</h1>;
    }

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button
                onClick={this.toggleModal}
                style={{ backgroundColor: theme }}
                type="button"
              >
                Adopt
                {name}
              </button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1>
                  Would you like to adopt
                  {name}
?
                </h1>
                <div className="buttons">
                  <button onClick={this.adopt} type="button">
                    Yes
                  </button>
                  <button onClick={this.toggleModal} type="button">
                    No, I am a monster
                  </button>
                </div>
              </div>
            </Modal>
          ) : (
            <div>one</div>
          )}
        </div>
      </div>
    );
  }
}

//   return = (
//     <pre>
//       <code>{JSON.stringify(props, null, 4)}</code>
//     </pre>
//   );
// };
export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
