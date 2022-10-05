import React, {Component} from 'react';
import {DocumentCard, DocumentCardActivity, DocumentCardPreview, DocumentCardTitle, ImageFit} from "@fluentui/react";
import { TestImages } from '@fluentui/example-data';
class VideoCard extends Component {
    props = {
        title : "",
        preview : ""

    }
    render() {
        const previewProps = {
            previewImages: [
                {
                    name: 'Revenue stream proposal fiscal year 2016 version02.pptx',
                    linkProps: {
                        href: 'http://bing.com',
                        target: '_blank',
                    },
                    //previewImageSrc: TestImages.documentPreview,
                    previewImageSrc: this.props.preview,
                    iconSrc: TestImages.iconPpt,
                    imageFit: ImageFit.cover,
                    width: 318,
                    height: 196,
                },
            ],
        };



        const DocumentCardActivityPeople = [{ name: 'Annie Lindqvist', profileImageSrc: TestImages.personaFemale }];
        return (
            <div style={{
                marginRight:"40px",
                marginTop:'25px'
            }}>
                <DocumentCard
                    aria-label="Default Document Card with large file name. Created by Annie Violinist a few minutes ago."
                    onClickHref="https://bing.com"
                >
                    <DocumentCardPreview {...previewProps} />
                    <DocumentCardTitle
                        title={
                        this.props.title
                        }
                        shouldTruncate
                    />
                    <DocumentCardActivity activity="Created a few minutes ago" people={DocumentCardActivityPeople} />
                </DocumentCard>
            </div>
        );
    }
}

export default VideoCard;