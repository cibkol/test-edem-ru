import React from "react";
import FlexBlock from "../../../FlexBlock";
import Text from "../../../Text";
import "./index.scss";

const FooterBottomPanel: React.FC = () => {
  return (
    <FlexBlock className="footer-bottom-panel">
      <Text color="gray-6" className="hover">
        © 2022 ООО «КОНТЕНТ»
      </Text>
      <Text color="gray-7" fontWeight="500" className="hover">
        Политика конфиденциальности
      </Text>
      <Text color="gray-7" fontWeight="500" className="hover">
        Пользовательское соглашение
      </Text>
    </FlexBlock>
  );
};

export default FooterBottomPanel;
