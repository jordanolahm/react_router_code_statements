import {
  Header,
  HeaderTitle,
  HeaderSubtitle,
  SearchSection,
  SearchLabel,
  SearchInput,
  ClearButton,
  ResultInfoContainer,
  ResultInfoText,
  ResultInfoSubtext,
  TableContainer,
  TableHeaderRow,
  TableHeaderCell,
  TableRow,
  TableCell,
  NoUsersMessage,
  NoUsersMessageTitle,
  NoUsersButton,
  LoadingContainer,
  LoadingBox,
  LoadingTitle,
  LoadingSubtitle,
  ErrorContainer,
  ErrorBox,
  ErrorMessage,
  RetryButton
} from './home.styles';
import { useUsers } from "../hooks/useUsers";
import { getNameColor } from "../utils/generalUtils";

export const Home: React.FC = () => {
  const {
    filteredUsers,
    searchTerm,
    loading,
    error,
    fetchUsers,
    handleSearch,
    clearSearch
  } = useUsers();

  if (loading) {
    return (
      <LoadingContainer>
        <LoadingBox>
          <LoadingTitle>LOADING...</LoadingTitle>
          <LoadingSubtitle>please wait</LoadingSubtitle>
        </LoadingBox>
      </LoadingContainer>
    );
  }

  if (error) {
    return (
      <ErrorContainer>
        <ErrorBox>
          <ErrorMessage>Error in load users</ErrorMessage>
          <RetryButton onClick={fetchUsers}>Retry</RetryButton>
        </ErrorBox>
      </ErrorContainer>
    );
  }

  return (
    <>
       <Header>
        <HeaderTitle>List of users</HeaderTitle>
        <HeaderSubtitle>Loaded infos</HeaderSubtitle>
      </Header>

      <SearchSection>
        <SearchLabel>Search:</SearchLabel>
        <SearchInput
          type="text"
          placeholder="Type user name"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <ClearButton onClick={clearSearch}>Clean</ClearButton>
      </SearchSection>

      {filteredUsers.length > 0 ? (
        <>
          <ResultInfoContainer hasSearch={searchTerm.length > 0}>
            <ResultInfoText isSearch={searchTerm.length > 0}>Results:</ResultInfoText>
            <ResultInfoSubtext>Founded {filteredUsers.length} users</ResultInfoSubtext>
          </ResultInfoContainer>

          <TableContainer>
            <TableHeaderRow>
              <TableHeaderCell width="10%" bgColor="#add8e6">ID</TableHeaderCell>
              <TableHeaderCell width="45%" bgColor="#b0e0e6">Name</TableHeaderCell>
              <TableHeaderCell width="45%" bgColor="#b0e0e6">Email</TableHeaderCell>
            </TableHeaderRow>

            {filteredUsers.map((user) => (
              <TableRow key={user.id} bgColor="#ffffff">
                <TableCell width="10%">{user.id}</TableCell>
                <TableCell width="45%" color={getNameColor(user.name)} fontWeight="bold">
                  {user.name}
                </TableCell>
                <TableCell width="45%">{user.email}</TableCell>
              </TableRow>
            ))}
          </TableContainer>
        </>
      ) : (
        <NoUsersMessage>
          <NoUsersMessageTitle>No users found</NoUsersMessageTitle>
          <NoUsersButton onClick={clearSearch}>Clean search</NoUsersButton>
        </NoUsersMessage>
      )}
    </>
  );
}
