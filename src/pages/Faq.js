import React, { useState } from 'react'
import styled from 'styled-components';
import { configGlobal } from '../assets/styledGlobal/configGlobal';
import AccordionItem from '../components/core/AccordionItem';
import Breadcrumb from '../components/core/Breadcrumb';
import Divider from '../components/core/Divider';
import Heading from '../components/core/Heading';
import SectionEndHome from '../components/ui/home/SectionEndHome/SectionEndHome';
const items = [
    {
        title: 'WHAT SHIPPING METHODS ARE AVAILABLE?',
        content: 'Nullam sed neque luctus, maximus diam sed, facilisis orci. Nunc ultricies neque a aliquam sollicitudin. Vivamus sit amet finibus sapien. Duis est dui, sodales nec pretium a, interdum in lacus. Sed et est vel velit vestibulum tincidunt non a felis. Phasellus convallis, diam eu facilisis tincidunt, ex nibh vulputate dolor, eu maximus massa libero vel eros.',
        activeValue: 1
    },
    {
        title: 'WHAT SHIPPING METHODS ARE AVAILABLE?',
        content: 'Nullam sed neque luctus, maximus diam sed, facilisis orci. Nunc ultricies neque a aliquam sollicitudin. Vivamus sit amet finibus sapien. Duis est dui, sodales nec pretium a, interdum in lacus. Sed et est vel velit vestibulum tincidunt non a felis. Phasellus convallis, diam eu facilisis tincidunt, ex nibh vulputate dolor, eu maximus massa libero vel eros.',
        activeValue: 2
    },
    {
        title: 'WHAT SHIPPING METHODS ARE AVAILABLE?',
        content: 'Nullam sed neque luctus, maximus diam sed, facilisis orci. Nunc ultricies neque a aliquam sollicitudin. Vivamus sit amet finibus sapien. Duis est dui, sodales nec pretium a, interdum in lacus. Sed et est vel velit vestibulum tincidunt non a felis. Phasellus convallis, diam eu facilisis tincidunt, ex nibh vulputate dolor, eu maximus massa libero vel eros.',
        activeValue: 3
    }
]

const lists = [
    {
        title: 'WHAT SHIPPING METHODS ARE AVAILABLE?',
        content: 'Nullam sed neque luctus, maximus diam sed, facilisis orci. Nunc ultricies neque a aliquam sollicitudin. Vivamus sit amet finibus sapien. Duis est dui, sodales nec pretium a, interdum in lacus. Sed et est vel velit vestibulum tincidunt non a felis. Phasellus convallis, diam eu facilisis tincidunt, ex nibh vulputate dolor, eu maximus massa libero vel eros.',
        activeValue: 4
    },
    {
        title: 'WHAT SHIPPING METHODS ARE AVAILABLE?',
        content: 'Nullam sed neque luctus, maximus diam sed, facilisis orci. Nunc ultricies neque a aliquam sollicitudin. Vivamus sit amet finibus sapien. Duis est dui, sodales nec pretium a, interdum in lacus. Sed et est vel velit vestibulum tincidunt non a felis. Phasellus convallis, diam eu facilisis tincidunt, ex nibh vulputate dolor, eu maximus massa libero vel eros.',
        activeValue: 5
    },
    {
        title: 'WHAT SHIPPING METHODS ARE AVAILABLE?',
        content: 'Nullam sed neque luctus, maximus diam sed, facilisis orci. Nunc ultricies neque a aliquam sollicitudin. Vivamus sit amet finibus sapien. Duis est dui, sodales nec pretium a, interdum in lacus. Sed et est vel velit vestibulum tincidunt non a felis. Phasellus convallis, diam eu facilisis tincidunt, ex nibh vulputate dolor, eu maximus massa libero vel eros.',
        activeValue: 6
    }
]
export default function Faq() {
    const [active, setActive] = useState(1)
    return (
        <FaqWrap>
            <Breadcrumb href="/faq" text="Faq" className="breadcrumb mb-4" />
            <div className="container">
                <Heading tag="h1" text="Frequently Asked Questions" className="mb-3" />    
                <div className="row-fb">
                    <div className="col-fb-6">
                        <div className="inner">
                            <Heading tag="h4" text="Shopping Information" className="mb-2" />
                            <div className="accordion">
                                {
                                    items.length > 0 && items.map(({title, content, activeValue},index) => <div onClick={() => setActive(activeValue)} key={index} className="accordion-item"><AccordionItem title={title} content={content} active={ active === activeValue ? true : false } /></div>)
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-fb-6">
                        <div className="inner">
                            <Heading tag="h4" text="Payment Information" className="mb-2" />
                            <div className="accordion">
                                {
                                    lists.length > 0 && lists.map(({title, content, activeValue},index) => <div onClick={() => setActive(activeValue)} key={index} className="accordion-item"><AccordionItem title={title} content={content} active={ active === activeValue ? true : false } /></div>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mb-3 mt-3">
                <SectionEndHome />
                <Divider colorBorder="#f0f0f0" />
            </div>
        </FaqWrap>
    )
}
const FaqWrap = styled.div`
    h4 {
        color: ${configGlobal.colorPrimary}
    }
    .row-fb {
        margin-left: -15px;
        margin-right: -15px;
    }
    .inner {
        padding-left: 15px;
        padding-right: 15px;
    }
`;