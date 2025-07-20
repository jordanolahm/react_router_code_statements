import styled from "styled-components";

export const Header = styled.header`
  text-align: center;
  margin-bottom: 2rem;
`;

export const HeaderTitle = styled.h1`
  font-size: 2.5rem;
  color: #222;
`;

export const HeaderSubtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

export const SearchSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

export const SearchLabel = styled.label`
  font-weight: bold;
  font-size: 1rem;
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;

  &:focus {
    border-color: #0070f3;
    outline: none;
  }
`;

export const ClearButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #ff6961;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #ff5c5c;
  }
`;

export const ResultInfoContainer = styled.div<{ hasSearch: boolean }>`
  margin-bottom: 1.5rem;
  padding: 0.5rem;
  background-color: ${({ hasSearch }) => (hasSearch ? "#f0f8ff" : "transparent")};
  border-radius: 0.5rem;
`;

export const ResultInfoText = styled.h3<{ isSearch?: boolean }>`
  font-size: 1.2rem;
  color: ${({ isSearch }) => (isSearch ? "#0070f3" : "#333")};
`;

export const ResultInfoSubtext = styled.p`
  font-size: 1rem;
  color: #555;
`;

export const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;
`;

export const TableHeaderRow = styled.tr`
  background-color: #f0f0f0;
`;

export const TableHeaderCell = styled.th<{ width?: string; bgColor?: string }>`
  padding: 0.75rem 1rem;
  text-align: left;
  background-color: ${({ bgColor }) => bgColor || "#ddd"};
  width: ${({ width }) => width || "auto"};
`;

export const TableRow = styled.tr<{ bgColor?: string }>`
  background-color: ${({ bgColor }) => bgColor || "#fff"};
  transition: background 0.2s;

  &:hover {
    background-color: #f9f9f9;
  }
`;

export const TableCell = styled.td<{
  width?: string;
  color?: string;
  fontWeight?: string;
}>`
  padding: 0.75rem 1rem;
  width: ${({ width }) => width || "auto"};
  color: ${({ color }) => color || "#000"};
  font-weight: ${({ fontWeight }) => fontWeight || "normal"};
`;

export const NoUsersMessage = styled.div`
  text-align: center;
  margin-top: 3rem;
`;

export const NoUsersMessageTitle = styled.h2`
  font-size: 1.5rem;
  color: #999;
`;

export const NoUsersButton = styled.button`
  margin-top: 1rem;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #005ec2;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
`;

export const LoadingBox = styled.div`
  text-align: center;
`;

export const LoadingTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

export const LoadingSubtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

// Error State
export const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
`;

export const ErrorBox = styled.div`
  text-align: center;
`;

export const ErrorMessage = styled.p`
  font-size: 1.5rem;
  color: #d9534f;
  margin-bottom: 1rem;
`;

export const RetryButton = styled.button`
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  background-color: #f0ad4e;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #ec971f;
  }
`;