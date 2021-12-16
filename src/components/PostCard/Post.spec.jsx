import { render, screen } from '@testing-library/react';
import { PostCard } from '.';
import { PostCardPropsMock } from './mock';

const props = PostCardPropsMock;

describe('<Postcard />', () => {
  it('should render Postcard correctly', () => {
    render(<PostCard {...props} />);

    expect(screen.getByRole('img', { name: /title1/i })).toHaveAttribute('src', 'img/img.png');
    expect(screen.getByRole('heading', { name: /title1/i })).toBeInTheDocument();
    expect(screen.getByText('body1', { name: /title1/i })).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<PostCard {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
